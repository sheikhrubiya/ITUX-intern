import React, { useState } from "react";
import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Collection from "./Pages/Collection";
import NewArrivals from "./Pages/Products/NewArrivals";
import Furniture from "./Pages/Furniture";
import Inspirations from "./Pages/Inspirations";
import Accents from "./Pages/Accents";
import Outdoor from "./Pages/Outdoor";
import Data from './Data/Data'
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import CartPage from "./Pages/Cart";
import Modal from "./Components/Modal";
import Copenhagen from "./Pages/Copenhagen";
import Greek from "./Pages/Greek";
import Manhattan from "./Pages/Manhattan";
import Travencore from "./Pages/Travencore";
import Bedroom from "./Pages/Bedroom";
import Livingroom from "./Pages/Livingroom";
import Office from "./Pages/Office";
import Dining from "./Pages/Dining";

const App = () => {
  const [modal, setModal]= useState(false);
  const [detail, setDetail]= useState(null);
  const [Shop, setShop] = useState(Data);
  const [Cart, setCart]= useState([]);
  const [wishlist, setWishlist]= useState([]);
  const [search, setSearch] = useState("");
  
  const addtowishlist=(obj)=>{
   setWishlist((prev)=>[...prev, {...obj, qty:1}])
   alert("Added to cart!");
  }
  const searchProduct = () => {
    const searchlength = search.trim();
    if (!searchlength) {
      alert("Please search Something!");
      setShop;
    } else {
      const searchfilter = Data.filter((x) => {
        return x.category.toLowerCase() === search;
      });
      setShop(searchfilter);
    }
  };
  const handleOpenModal= (item)=>{
    setModal(!modal);
    setDetail(item)
  }
  
  const addtocart = (product) => {
    
    const exist = Cart && Cart.find((x) => x.id === product.id);
    if (exist) {
      alert("This item is already in cart!!");
    } else {
      setCart((prev) => [...prev, { ...product, qty: 1 }]);
      alert("Added to cart!");
    }
  };

  const Filter= (obj)=>{
    const filter = Data.filter((x)=>{
     return x.category === obj;
    })
    setShop(filter);
  }
  const allCategoryFilter = () => {
    setShop(Data);
  };
  const handlePriceFilter = (priceRange) => {
    console.log(priceRange)
    // Filter products based on the selected price range
    const filtered = Data.filter((item) => {
      
     // const price = parseFloat(item.price.replace('$', '').replace(',', ''));
     // return price >= priceRange.min && price <= priceRange.max;
    });

    setShop(filtered);
  };
  const routes= createBrowserRouter([
    {
      path:"/",
      element:(
        <Layout search={search} setSearch={setSearch} searchProduct={searchProduct}/>
      ),
      children: [
        {
          path:"/",
          element:(
            <Home/>
          ),
        },
        {
          path:"/collection",
          element:(<Collection/>)
        },
        {
          path:"/new",
          element:(<NewArrivals/>)
        },
        {
          path:"/furniture",
          element:(<Furniture Filter={Filter} Shop={Shop} allCategoryFilter={allCategoryFilter} handlePriceFilter={handlePriceFilter} addtocart={addtocart} addtowishlist={addtowishlist} handleOpenModal={handleOpenModal} modal={modal} detail={detail} />)
        },
        {
          path:"/outdoor",
          element:(<Outdoor/>)
        },
        {
          path:"/accents",
          element:(<Accents/>)
        },
        {
          path:"/inspirations",
          element:(<Inspirations/>)
        },
        {
          path:"/cart",
          element:(<CartPage Cart={Cart} setCart={setCart}/>)
        },
        {
          path:"/wishlist",
          element:(<Wishlist wishlist={wishlist}/>)
        },
        {
          path:"/login",
          element:(<Login/>)
        },
        {
          path:"/signup",
          element:(<Signup/>)
        },
        {
          path:"/modal",
          element:(<Modal/>)
        },
        {
          path:"/copenhagen",
          element:(<Copenhagen addtocart={addtocart} handleOpenModal={handleOpenModal} addtowishlist={addtowishlist}/>)
        },
        {
          path:"/greek",
          element:(<Greek/>)
        },
        {
          path:"/manhattan",
          element:(<Manhattan/>)
        },
        {
          path:"/travencore",
          element:(<Travencore/>)
        },
        {
          path:"/bedroom",
          element:(<Bedroom addtocart={addtocart} addtowishlist={addtowishlist} handleOpenModal={handleOpenModal}/>)
        },
        {
          path:"/livingroom",
          element:(<Livingroom addtocart={addtocart} addtowishlist={addtowishlist} handleOpenModal={handleOpenModal}/>)
        },
        {
          path:"/office",
          element:(<Office addtocart={addtocart} addtowishlist={addtowishlist} handleOpenModal={handleOpenModal}/>)
        },
        {
          path:"/dining",
          element:(<Dining addtocart={addtocart} addtowishlist={addtowishlist} handleOpenModal={handleOpenModal}/>)
        }
      ]
    }
  ]);
  return (
   <RouterProvider router={routes}/>
  );
};

export default App;
