import React from "react";
import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person1.jpg";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Testimonialsnew = () => {
  const testimonials = [
    {
      image: person1,
      name: "John Peter",
      role: "CEO",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non hic, similique vel nobis fugiat ducimus dicta quasi, eligendi aliquam repellendus veritatis magni obcaecati laborum? Esse labore voluptate magnam maxime earum.",
    },
    {
      image: person2,
      name: "Alice Green",
      role: "CTO",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non hic, similique vel nobis fugiat ducimus dicta quasi, eligendi aliquam repellendus veritatis magni obcaecati laborum? Esse labore voluptate magnam maxime earum.",
    },
    {
      image: person3,
      name: "Sarah Lee",
      role: "CFO",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non hic, similique vel nobis fugiat ducimus dicta quasi, eligendi aliquam repellendus veritatis magni obcaecati laborum? Esse labore voluptate magnam maxime earum.",
    },
  ];

  return (
    <div className="flex flex-col gap-4 bg-white mt-10 w-full max-w-screen-xl mx-auto rounded-lg px-4 py-10">
      <div className="w-full text-center">
        <p className="text-2xl text-amber-400">Testimonials</p>
        <p className="text-sm font-extralight">
          Our top boss and their useless details.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col items-center bg-gray-100 shadow-lg shadow-gray-400 rounded-lg p-6">
            <div className="w-20 h-20 rounded-full bg-white border-2 border-gray-300 mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="relative w-full">
              <FaQuoteLeft className="absolute top-0 left-0 text-amber-400 text-2xl -ml-4 -mt-4" />
              <p className="text-xs text-center p-4 mb-4">{testimonial.quote}</p>
              <FaQuoteRight className="absolute bottom-0 right-0 text-amber-400 text-2xl mr-4 mb-4" />
            </div>
            <div className="text-center">
              <p className="font-semibold text-amber-600 text-lg">{testimonial.name}</p>
              <p className="text-xs font-extralight">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonialsnew;
