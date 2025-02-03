import React from "react";
import image1 from "../assets/image10.jpeg";
import dining from "../assets/diningtable.jpg";
import sofa from "../assets/image3.jpg";
import table from '../assets/table.jpg';
import cabinet from '../assets/cabinet.jpg'
const Livingroom = () => {
  return (
    <div className="mt-14">
      <div className="relative border-b-1 border-black">
        <p className="text-4xl font-bold -mt-6 absolute left-[370px] bg-white">
          Living Room Furnitures
        </p>
      </div>
      <div className="flex flex-row w-full h-[400px] mt-8">
        <div className="w-[50%] h-[320px] relative p-4">
          <img
            src={image1}
            alt="imaag"
            className="w-[600px] h-[500px] rounded-2xl"
          />
          <div className="absolute top-40 left-40">
            <p className="text-4xl text-white font-bold tracking-wider">
              Lounge Chair
            </p>
            <p className="text-2xl text-white font-semibold tracking-widest">
              Style that suits you
            </p>
          </div>
        </div>
        <div className="w-[50%] grid grid-cols-2 p-4 gap-8">
          <div className="w-[270px] h-[230px] rounded-2xl relative">
            <img src={dining} className="w-full h-full rounded-2xl"/>
            <p className="text-sm font-medium text-white absolute top-48 left-30">Dining Set</p>
          </div>
          <div className="w-[270px] h-[230px] rounded-2xl relative">
            <img src={sofa} className="w-full h-full rounded-2xl"/>
            <p className="text-sm font-medium text-white absolute top-48 left-30">Sofa Set</p>
          </div>
          <div className="w-[270px] h-[230px] rounded-2xl relative">
            <img src={table} className="w-full h-full rounded-2xl"/>
            <p className="text-sm font-medium text-white absolute top-48 left-30">Coffee Table</p>
          </div>
          <div className="w-[270px] h-[230px] rounded-2xl relative">
            <img src={cabinet} className="w-full h-full rounded-2xl"/>
            <p className="text-sm font-medium text-white absolute top-48 left-30">Cabinet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Livingroom;
