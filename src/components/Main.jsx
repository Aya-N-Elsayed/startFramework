import React from "react";
import { Navbar } from "./NavBar/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer/Footer";


export const Main = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="">
        <Outlet />
        </div>
    <Footer/>  
    </div>
  );
};
