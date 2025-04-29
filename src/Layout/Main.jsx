import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Main = () => {
  return (
    <div className="grid grid-rows-[1fr_auto] min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
