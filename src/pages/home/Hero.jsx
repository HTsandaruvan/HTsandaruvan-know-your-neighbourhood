import React from "react";
import { hero } from "../../assets";
import SearchForm from "../../components/form/SearchForm";

const Hero = () => {
  return (
    <section className="grid md:grid-cols-2  h-max ">
      <div className="flex flex-col justify-center mr-0 md:mr-8">
        <h2 className="font-extrabold text-3xl md:text-4xl font-inter">
          Welcome to
        </h2>
        <h2 className="font-extrabold text-3xl md:text-4xl font-inter">
          Know Your Neighborhood
        </h2>
        <p className="max-w-[550px] text-gray-600 font-medium mt-1">
        We are award-winning giving platform that helps businesses make a 
        positive impact in their communities by donating volunteer time, money and surplus products, 
        all in one place.
        </p>
        <div className="flex my-5 max-w-[550px] text-color3">
          <a
            href="/stores"
            className="px-2 py-3 bg-color1 rounded mr-3 w-full max-w-[150px] text-center focus:ring-1 
           focus:ring-offset-gray-200 "
          >
            Get Started <i className="fa-solid fa-arrow-right" />
          </a>
          <SearchForm />
        </div>
      </div>
      <img
        src={hero}
        alt=""
        className="rounded-3xl lg:rounded-[150px] lg:rounded-tl-[50px] lg:rounded-br-[50px] shadow-2xl 
        cursor-pointer brightness-95 hover:brightness-90 transition duration-150"
      />
    </section>
  );
};

export default Hero;
