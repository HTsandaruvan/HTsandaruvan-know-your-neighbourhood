import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navigation/Navbar";

const MainLayout = (props) => {
  return (
    <div className="bg-gradient-to-r from-purple-100 to-orange-600 grid grid-rows-[auto_1fr_auto] min-h-screen">
        <Navbar className="mb-28"></Navbar>
      <div className="flex justify-center px-6  ">
        <main className="xl:max-w-[1280px] w-full text-primary mt-16 ">
          {props.children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
