import React, { useCallback, useEffect, useRef, useState } from "react";
const cssValues = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
  gap: "2px",
  paddingTop: "10px",
};
const PriceRangeSlider = ({
  min,
  max,
  trackingColor = "#cecece",
  onChange,
  rangeColor = "#ff0303",
  valueStyle: cssValues,
  width = "300px",
  currencyText = "$",
}) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);
  //covert to percentage
  const getPercentage = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );
  // set width of the range to increae/decrease from left
  useEffect(() => {
    const minPercent = getPercentage(minVal);
    const maxPercent = getPercentage(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercentage]);

  // set width of the range to increae/decrease from right
  useEffect(() => {
    const minPercent = getPercentage(minValRef.current);
    const maxPercent = getPercentage(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercentage]);

  //get min and max values when their state changes

  useEffect(() => {
    if (minVal != minValRef.current || maxVal != maxValRef.current) {
      onChange({ min: minVal, max: maxVal });
      minValRef.current = minVal;
      maxValRef.current = maxVal;
    }
  }, [minVal, maxVal, onchange]);

  return (
    <div className="w-full flex items-center justify-center flex-col space-y-14">
      {/* Display min and max values */}
      <div className="w-[300px] px-4 flex items-center justify-between gap-x-5">
        <p className="text-xl text-neutral-100 font-semibold">
          {currencyText}
          {minVal}
        </p>
        <div className="flex-1 border-dashed border-neutral-100 font-semibold"></div>
        <p className="text-xl text-neutral-100 font-semibold">
          {currencyText}
          {maxVal}
        </p>
      </div>
      {/* style custom price range slider */}
      <div className="price_range_slider" style={{ width }}>
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onchange={(e) => {
            const value = Math.min(Number(e.target.value), maxVal - 1);
            setMinVal(value);
          }}
          className="thumb thumb-left"
          style={{
            width,
            zIndex: minVal > max-100 || minVal === maxVal? 5 : undefined, 
          }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onchange={(e) => {
            const value = Math.max(Number(e.target.value), minVal + 1);
            setMaxVal(value);
          }}
          className="thumb thumb-left"
          style={{
            width,
            zIndex: minVal > max-100 || minVal === maxVal? 4 : undefined, 
          }}
        />
        <div className="slider">
          <div className="track-slider" style={{backgroundColor:trackingColor}}/>
          <div className="range-slider" style={{backgroundColor:rangeColor}}/>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
