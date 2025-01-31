import { useState } from "react";
import Navbar from "./Components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Living from "./Pages/Living";
import Bedroom from "./Pages/Bedroom";
import Study from "./Pages/Study";
import Kids from "./Pages/Kids";
import Decor from "./Pages/Decor";
import Furnishing from "./Pages/Furnishing";
import Kitchen from "./Pages/Kitchen";
import Dining from "./Pages/Dining";
import Layout from "./Pages/Layout";
import Cart from "./Pages/Cart";
import CartPage from "./Pages/CartPage";
import Wishlist from "./Pages/Wishlist";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Data from "./Data/Data";
import Modal from "./Components/Modal";
import Products from "./Pages/Products";

function App() {
  const [count, setCount] = useState(0);
  const [detail, setDetail]= useState(null);
  const [wishlist, setWishlist]= useState([]);
  const [Cart, setCart]= useState([]);
  const [search, setSearch] = useState("");
  const [shop, setShop]= useState(Data);
  const [modal, setModal]= useState(false);

  const handleOpenModal= (item)=>{
    setModal(!modal);
    setDetail(item)
  }

  const addtowishlist=(obj)=>{
    setWishlist((prev)=>[...prev, {...obj, qty:1}])
    alert("Added to cart!");
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
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout search={search} setSearch={setSearch} searchProduct={searchProduct}/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/living",
          element: <Living />,
        },
        {
          path: "/bedroom",
          element: <Bedroom addtocart={addtocart} addtowishlist={addtowishlist} shop={shop} handleOpenModal={handleOpenModal} detail={detail} modal={modal}/>,
        },
        {
          path: "/study",
          element: <Study />,
        },
        {
          path: "/kids",
          element: <Kids />,
        },
        {
          path: "/decor",
          element: <Decor />,
        },
        {
          path: "/furnishing",
          element: <Furnishing />,
        },
        {
          path: "/kitchen",
          element: <Kitchen />,
        },
        {
          path: "/dining",
          element: <Dining />,
        },
        {
          path:"/cart",
          element:(<CartPage Cart={Cart} setCart={setCart}/>)
        },
        {
          path:"/wishlist",
          element:(<Wishlist wishlist={wishlist} setWishlist={setWishlist}/>)
        },
        {
          path: "/signin",
          element: <Signin />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/products",
          element: <Products />,
        }
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
