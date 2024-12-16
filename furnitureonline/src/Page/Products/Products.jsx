import React, { useState } from "react";
import { AiFillEye, AiFillHeart, AiOutlineClose, AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import furnitureonsale from '../../assets/furnitures/salefurniture.jpg'
export default function Products({shop, Filter, allCategoryFilter, isAuthenticated, setIsAuthenticated, cart, setCart}) {
  const navigate = useNavigate();
  const [showDetail, setShowDetail] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Showing detail
  const detailpage = (product) => {
    setShowDetail(true);
    setSelectedProduct(product);
  }

  // Adding to cart
  const addtocart = (product) => {
    if (!isAuthenticated) {
      alert("Please Sign in to proceed.");
      navigate("/signup");
      return;
    }
    const exist = cart && cart.find((x) => x.id === product.id);
    if (exist) {
      alert("This item is already in cart!!");
    } else {
      setCart((prev) => [...prev, { ...product, qty: 1 }]);
      alert("Added to cart!");
    }
  };

  // Close detail view
  const closeDetailView = () => {
    setShowDetail(false);
    setSelectedProduct(null);
  }
  
  return (
    <div className="container mx-auto px-4">
      {/* Product Detail Modal */}
      {showDetail && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto rounded-lg shadow-xl p-6 relative">
            <button 
              onClick={closeDetailView} 
              className="absolute top-4 right-4 text-2xl hover:text-red-500"
            >
              <AiOutlineCloseCircle/>
            </button>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 mb-4 md:mr-4">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full h-auto object-cover rounded"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-xl font-bold mb-2">{selectedProduct.name}</h2>
                <p className="text-red-600 font-semibold mb-2">${selectedProduct.price}</p>
                <p className="text-gray-600 mb-4">Additional product details would go here...</p>
                <button 
                  onClick={() => addtocart(selectedProduct)}
                  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-full">
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          {/* Sidebar - Categories and Sale Image */}
          <div className="w-full lg:w-1/4">
            {/* Categories */}
            <div className="border border-[#e9f8f5] mb-4">
              <div className="bg-stone-200 p-3">
                <h3 className="text-sm text-black font-bold uppercase tracking-wider">
                  All Categories
                </h3>
              </div>
              <div className="p-3">
                <ul className="space-y-2">
                  {[
                    { label: "All", action: allCategoryFilter },
                    { label: "Bed", action: () => Filter("Bed") },
                    { label: "Sofa", action: () => Filter("Sofa") },
                    { label: "Table", action: () => Filter("Table") },
                    { label: "Chair", action: () => Filter("Chair") },
                    { label: "Almirah", action: () => Filter("Almirah") }
                  ].map((category) => (
                    <li
                      key={category.label}
                      onClick={category.action}
                      className="uppercase text-sm font-semibold text-stone-500 tracking-wider cursor-pointer hover:text-stone-700 transition"
                    >
                      # {category.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sale Image */}
            <div>
              <img
                src={furnitureonsale} 
                alt="Sale Item" 
                className="w-full h-auto object-cover rounded"
              />
            </div>
          </div>

          {/* Products Section */}
          <div className="w-full lg:w-3/4">
            <h2 className="text-gray-400 uppercase tracking-wider text-sm mb-4">
              Lets Get Started!!!
            </h2>
            
            {/* Responsive Grid for Products */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {shop.map((obj) => (
                <div 
                  key={obj.id} 
                  className="border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
                >
                  <div className="relative">
                    <img
                      src={obj.image}
                      alt={obj.name}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-2 right-2 flex flex-col space-y-2">
                      <button 
                        className="bg-white p-2 rounded-full shadow-md hover:bg-red-100 transition"
                        onClick={() => {/* Add to wishlist logic */}}
                      >
                        <AiFillHeart />
                      </button>
                      <button 
                        className="bg-white p-2 rounded-full shadow-md hover:bg-blue-100 transition"
                        onClick={() => detailpage(obj)}
                      >
                        <AiFillEye />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-3 text-center">
                    <h3 className="text-black text-sm font-semibold uppercase mb-1">
                      {obj.name}
                    </h3>
                    <p className="text-red-600 font-bold mb-2">
                      ${obj.price}
                    </p>
                    <button
                      className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                      onClick={() => addtocart(obj)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}