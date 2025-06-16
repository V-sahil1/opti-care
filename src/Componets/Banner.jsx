import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import Login from "./Login";

function Banner() {
  return (
    <div className="flex font-roboto bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 ">
      {/* ------- Left Side ------- */}
      <div className="flex-1 py-8 sm:py-16 lg:py-24 lg:pl-5 ">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white">
          <p className="font-bold">Book Appointment</p>
          <p className="mt-4">With 100+ Trusted Doctors</p>
        </div>
        <div className="mt-4  ">
          <Login />
        </div>
      </div>
      {/* ------- Right Side ------- */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img
          className="w-full absolute bottom-0 right-0 max-w-md"
          src={assets.appointment_img}
          alt=""
        />
      </div>
    </div>
  );
}

export default Banner;
