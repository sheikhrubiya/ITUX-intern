import React from "react";
import Banner1 from "../../assets/banner.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animation";
const Banner = () => {
  return (
    <>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
         {/* Text section  */}
         <div className="space-y-5 flex justify-center flex-col">
            <motion.h1 variants={SlideUp(0.2) } initial="initial" whileInView={"animate"}  className="text-3xl font-bold font-serif">
              Simple and Modern designed
            </motion.h1>
            <motion.p variants={SlideUp(0.2) } initial="initial" whileInView={"animate"} className="text-gray-500 text-sm leading-7">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo officia error sapiente ipsum sint aliquam. Nostrum
              adipisci excepturi obcaecati sapiente fugit velit aperiam pariatur
              quibusdam a, officiis animi exercitationem earum.
            </motion.p>
            <motion.div variants={SlideUp(0.2) } initial="initial" whileInView={"animate"} className="flex gap-3">
              <div className="max-w-[80px] space-y-3">
                <p className="text-3xl font-bold font-serif">15</p>
                <p className="text-gray-500 text-sm">Years of experience</p>
              </div>
              <div className="max-w-[80px] space-y-3">
                <p className="text-3xl font-bold font-serif">300</p>
                <p className="text-gray-500 text-sm">Different products</p>
              </div>
              <div className="max-w-[80px] space-y-3">
                <p className="text-3xl font-bold font-serif">25</p>
                <p className="text-gray-500 text-sm">Awards gained</p>
              </div>
            </motion.div>
            <div>
              <motion.button variants={SlideUp(0.2) } initial="initial" whileInView={"animate"} className="primary-btn bg-black text-white shadow-[5px_5px_0px_0px_gray]">Contact Us</motion.button>
            </div>
          </div>
          {/* Image section */}
          <div className="flex flex-col justify-center ">
            <motion.img initial={{x:100, opacity:0}} animate={{ x:0, opacity:1}} src={Banner1}  transition={{ duration:0.5, delay:0.2}}   className="w-[80%] md:w-full mx-auto h-[250px]" />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Banner;
