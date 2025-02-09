import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Anouncement from "./Components/Anouncement";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import About from "./Pages/About";
import CartPage from "./Pages/CartPage";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Product from "./Pages/Product";
import Modal from "./Components/Modal";

function App() {
  const [detail, setDetail] = useState(null);
  const [cart, setCart]= useState([]);
  const [modal, setModal] = useState(false);
  
  const handleOpenModal= (item)=>{
    setModal(!modal);
    setDetail(item)
  }

 const addtocart = (obj)=>{
   const exist = cart && cart.find((e)=>e.id===obj.id);
   if(exist)
   { alert("Item already in cart!!")}
   else
   {
    setCart((prev)=>[...prev, {...obj, qty:1}])
    alert("Item Added!!")
   }
 }

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/products", element: <Products detail={detail} handleOpenModal={handleOpenModal} modal={modal} addtocart={addtocart}/> },
        { path: "/about", element: <About /> },
        { path: "/cart", element: <CartPage Cart={cart}/> },
        { path: "/signin", element: <Signin/> },
        { path: "/signup", element: <Signup/> },
        { path: "/product", element: <Product/> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  );
}

export default App;
