import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { assets } from "../assets/assets_frontend/assets";

function Header() {
  return (
    <div
      style={{ backgroundImage: `url(${assets.indianflag})` }}
      className="flex bg-cover bg-center flex-col  md:flex-row flex-wrap rounded-lg px-6 md:px-10 lg:px-20"
    >
      {/* left side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] ">
        <div className="text-white">
          <h1 className="text-4xl text-orange-500 md:text-5xl lg:text-6xl font-bold leading-tight">
            Your Health, Your Schedule.
          </h1>
          <p className="text-lg md:text-xl text-green-800 lg:text-2xl font-medium mt-4">
            Trusted Doctors Just a Click Away.
          </p>
        </div>
        <div className="flex py-2 text-white  gap-3">
          <img
            className="lg:w-[90px] md:w-[70px] w-[70px]  "
            src={assets.group_profiles}
            alt=""
          />
          <p className="text-black text-md sm:text-sm">
            Simply browse through our extensive list of trusted doctors,
            <br className="hidden sm:block" /> schedule your appointment
            hassle-free
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-center group justify-center gap-2 bg-green-800 px-8 py-3 rounded-full text-white font-bold text-sm md:m-0 m-auto  "
        >
          Book Appointment <FaArrowRightLong className="group-hover:text-white group-hover:translate-x-3 transition-all duration-300" />
        </a>
      </div>
      {/* right side */}
      {/* 59:25 */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 left-12 right-[-3] h-auto rounded-lg"
          src={assets.header_img}
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
