import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14  mt-5 text-sm">
        {/* -------- Left Section   --------- */}
        <div>
          <img
            src={assets.logo}
            alt=""
            className="h-12 sm:h-14 md:h-16 w-auto mb-3 "
          />
          <p className="w-full  md:w-2/3 text-gray-600 leading-6">
            OptiCare is an online doctor appointment platform connecting you
            with top-rated, trusted healthcare professionals—all in one place.
          </p>
        </div>
        {/* -------- Mid Section   --------- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li
              className="cursor-pointer"
              onClick={() => (navigate("/"), window.scrollTo(0, 0))}
            >
              Home
            </li>
            <li
              className="cursor-pointer"
              onClick={() => (navigate("/about"), window.scrollTo(0, 0))}
            >
              About Us
            </li>
            <li
              className="cursor-pointer"
              onClick={() => (navigate("/contact"), window.scrollTo(0, 0))}
            >
              Contact Us
            </li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* -------- Right Section   --------- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91-89759-46286</li>
            <li>sahilvardekar@gmail.com</li>
          </ul>
        </div>
      </div>

      {/*         
           <div>
            <hr className='mt-5' />
            <p className='py-5 text-sm font-semibold'>Copyright 2025 &copy; OptiCare -All Right Reserved.</p>
            </div>  */}
      <p className="text-center  mt-6 mb-9 text-xl  font-semibold">
        Made with ❤️ and ☕ in India
      </p>
    </div>
  );
}

export default Footer;
