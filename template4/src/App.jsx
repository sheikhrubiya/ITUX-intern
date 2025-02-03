import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Anouncement from "./Components/Anouncement";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import About from "./Pages/About";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/products", element: <Products /> },
        { path: "/about", element: <About /> },
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
