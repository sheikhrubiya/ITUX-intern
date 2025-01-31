import React from "react";
import video from "../assets/video1.mp4";
import video1 from "../assets/video2.mp4";
import video2 from "../assets/video3.mp4";
import video3 from "../assets/video4.mp4";
import image from "../assets/english.jpeg";
import ReactPlayer from "react-player";
const url = "https://www.youtube.com/watch?v=fEYUqB6ek6s";
const url1 = "https://www.youtube.com/watch?v=9jx9rRCcPNU";
const url2 = "https://www.youtube.com/watch?v=vd3j9y04lvo";
const Testimonials = () => {
  return (
    <>
    <p className="text-center text-black text-xl font-semibold mt-5">Our Testimonials</p>
      <div className="w-full h-[500px] flex flex-row bg-black text-white justify-between gap-2 overflow-hidden mt-2">
    
    <div className="w-[680px] h-[360px] flex flex-col p-10 ">
      <ReactPlayer url={url} />
      <p className="text-xl font-medium">Avinash Patel | Software Engr</p>
      <p className="text-sm w-full ">
        Wakefit sofa is not only a piece of furniture, it is part of your
        life, supporting you in all aspects of your life. I say that this
        Wakefit sofa is a part of our life.
      </p>
    </div>
    <div className="w-[30%] gap-2 flex flex-col p-2 mr-5">
      <div className="flex flex-col">
        <ReactPlayer url={url1} width="100%" height="100%" />
        <p className="text-xl font-medium -mt-1">Avadh Patel | Software Engr</p>
        <p className="text-sm ">
          Wakefit sofa is not only a piece of furniture, it is part of your
          life, supporting you in all aspects of your life. I say that this
          Wakefit sofa is a part of our life.
        </p>
      </div>
      <div className="flex flex-col">
        <ReactPlayer url={url2} width="100%" height="100%" />
        <p className="text-xl font-medium">Surbhi Patel | Software Engr</p>
        <p className="text-sm ">
          Wakefit sofa is not only a piece of furniture, it is part of your
          life, supporting you in all aspects of your life. I say that this
          Wakefit sofa is a part of our life.
        </p>
      </div>
    </div>
  </div>
    </>
    
  );
};

export default Testimonials;
