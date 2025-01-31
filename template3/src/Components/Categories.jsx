import React from "react";
import bed from "../assets/bed.jpg";
import dining from "../assets/dining.jpg";
import chair from "../assets/chair.jpg";
import homedecor from "../assets/homedecor.jpg";
import homeessentials from "../assets/homeessentials.jpg";
import TVunit from "../assets/TVunit.jpg";
import mattress from "../assets/mattress.jpg";
import kids from "../assets/kids.jpg";
import sofa from "../assets/sofa.jpg";
import pillow from "../assets/pillow.jpg";
import wardrobe from "../assets/wardrobe.jpg";
import shelves from "../assets/shelves.jpg";

const Categories = () => {
  const category = [
    { image: bed, label: "Beds & Sidetables" },
    { image: chair, label: "Chair and WFH furnitures" },
    { image: mattress, label: "Bedding & Mattresses" },
    { image: sofa, label: "Sofa & Seatings" },
    { image: pillow, label: "Pillows & Cushions" },
    { image: TVunit, label: "TV units & coffee tables" },
    { image: shelves, label: "Cabinet & Shelves" },
    { image: dining, label: "Dining & Kitchen" },
    { image: kids, label: "Kids & Play" },
    { image: homedecor, label: "Home decor" },
    { image: homeessentials, label: "Home essentials" },
    { image: wardrobe, label: "Wardrobe & Dressing tables" },
  ];

  return (
    <div className="mt-5 bg-gray-100 py-10">
      <p className="text-center text-3xl font-medium mb-8">Shop By Categories</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 px-4">
        {category.map((item) => (
          <div
            key={item.label}
            className="w-full flex flex-col rounded-lg border-2 shadow-lg shadow-gray-500 relative overflow-hidden"
          >
            <div className="w-full h-[220px]">
              <img
                src={item.image}
                alt={item.label}
                className="object-cover w-full h-full transform hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>

            <p className="absolute bottom-0 left-0 right-0 text-center text-white bg-gradient-to-t from-black to-transparent font-medium py-2">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
