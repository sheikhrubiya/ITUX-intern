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

const App = () => {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [shop, setShop] = useState(Data);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

 

  const Filter = (x) => {
    const categoryFilter = Data.filter((product) => {
      return product.category === x;
    });
    setShop(categoryFilter);
  };

  const allCategoryFilter = () => {
    setShop(Data);
  };

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

  // const addtocart = (product) => {
  //   if (!isAuthenticated) {
  //     navigate("/signup");
  //   }
  //   const exist = cart && cart.find((x) => x.id === product.id);
  //   if (exist) {
  //     alert("This item is already in cart!!");
  //   } else {
  //     setCart((prev) => [...prev, { ...product, qty: 1 }]);
  //     alert("Added to cart!");
  //   }
  // };

  const routes = createBrowserRouter([
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
              //addtocart={addtocart}
              Filter={Filter}
              allCategoryFilter={allCategoryFilter}
              isAuthenticated={isAuthenticated}
              setisAuthenticated={setisAuthenticated}
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
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/wishlist",
          element: <Wishlist />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default App;
