import React, { useState } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Page/Home/Home";
import Products from "./Page/Products/Products";
import About from "./Page/About/About";
import Services from "./Page/Services/Services";
import Contact from "./Page/Contact/Contact";
import Data from "../src/Data/Data";
import Cart from "./components/Cart/Cart";
import Signup from "./Signup/Signup";
import Wishlist from "./components/Wishlist/Wishlist";
import { useNavigate } from "react-router-dom";
import Signin from "./Signin/Signin";
import Profile from "./components/Profile/Profile";

const App = () => {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [shop, setShop] = useState(Data);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
 

  const Filter = (x) => {
    const categoryFilter = Data.filter((product) => {
      return product.category === x;
    });
    setShop(categoryFilter);
  };

  const allCategoryFilter = () => {
    setShop(Data);
  };

  const addtocart = (product) => {
    
    const exist = cart && cart.find((x) => x.id === product.id);
    if (exist) {
      alert("This item is already in cart!!");
    } else {
      setCart((prev) => [...prev, { ...product, qty: 1 }]);
      alert("Added to cart!");
    }
  };

  const addtowishlist = (product)=>{
    const exist= wishlist && wishlist.find((x)=>x.id===product.id);
    if(exist)
    {alert("Item already in wishlist!")}
    else{
      setWishlist((prev) => [...prev, {...product, qty:1}]);
      alert("Item added in wishlist!")
    }
  }

  // const searchlength = (search || []).length === 0;

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
  
 
  const logoutRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Signin isAuthenticated={isAuthenticated} setisAuthenticated={setisAuthenticated}/>
    },
    {
      path: "/signup",
      element: <Signup isAuthenticated={isAuthenticated} setisAuthenticated={setisAuthenticated}/>
    }
  ])

  const loginRoutes = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout
          search={search}
          setSearch={setSearch}
          searchProduct={searchProduct}
        />
      ),
      children: [
        {
          path: "/",
          element: (
            <Home
              isAuthenticated={isAuthenticated}
              setisAuthenticated={setisAuthenticated}
            />
          ),
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/products",
          element: (
            <Products
              shop={shop}
              addtocart={addtocart}
              Filter={Filter}
              allCategoryFilter={allCategoryFilter}
              isAuthenticated={isAuthenticated}
              setisAuthenticated={setisAuthenticated}
              addtowishlist={addtowishlist}
            />
          ),
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/cart",
          element: <Cart cart={cart} setCart={setCart} />,
        },
        
        {
          path: "/wishlist",
          element: <Wishlist wishlist={wishlist} setWishlist={setWishlist}/>,
        },
        
        {
          path:"/profile",
          element:<Profile/>
        }
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={isAuthenticated?loginRoutes:logoutRoutes} />
    </>
  );
};

export default App;
