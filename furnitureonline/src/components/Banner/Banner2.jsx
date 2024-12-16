import React from "react";
import banner2 from "../../assets/banner2.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animation";
const Banner2 = () => {
  return (
    <>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image section */}
          <div className="flex flex-col justify-center ">
            <motion.img initial={{x:-100, opacity:0}} animate={{ x:0, opacity:1}} src={banner2} className="w-[80%] md:w-full mx-auto" />
          </div>
          {/* Text section  */}
          <div className="space-y-5 flex justify-center flex-col">
            <motion.h1 variants={SlideUp(0.2) } initial="initial" whileInView={"animate"} className="text-3xl font-bold font-serif">
              Our products are Affordable and Exclusive
            </motion.h1>
            <motion.p variants={SlideUp(0.2) } initial="initial" whileInView={"animate"} className="text-gray-500 text-sm leading-7">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo officia error sapiente ipsum sint aliquam. Nostrum
              adipisci excepturi obcaecati sapiente fugit velit aperiam pariatur
              quibusdam a, officiis animi exercitationem earum.
            </motion.p>
            <div>
              <motion.button variants={SlideUp(0.2) } initial="initial" whileInView={"animate"} className="primary-btn  bg-black text-white shadow-[5px_5px_0px_0px_gray]">Discover now</motion.button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner2;
