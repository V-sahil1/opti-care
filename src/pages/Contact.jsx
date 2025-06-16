import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

function Contact() {
  const navigate = useNavigate();
  return (
    <div className="px-10 py-6">
      <h1 className="text-center text-3xl font-extralight">
        CONTACT <span className="font-semibold    ">US</span>
      </h1>
      <div className="flex flex-col md:flex-row gap-9 my-6 mx-6 ">
        <div className="md:w-[40%] sm:w-full h-auto object-cover rounded-xl shadow-md ">
          <img src={assets.contact_image} alt="" />
        </div>
        <div className="my-1 p-3 py-2 text-gray-600 font-light">
          <h2 className="mb-4 text-xl">
            {" "}
            <b className="text-gray-600">OUR OFFICE</b>
          </h2>
          <div className=" mb-4 py-2">
            <p>3rd Floor, Atria Corporate Park,</p>
            <p>Near Western Express Highway Metro Station,</p>
            <p>Andheri East, Mumbai, Maharashtra – 400069</p>
          </div>
          <div className=" my-5 py-2">
            <p>Tel:+91-87954-98456</p>
            <p>Email:sahilvardekar89@gmail.com</p>
          </div>
          <div className="mb-3">
            <h3 className=" text-xl">
              <b className="text-gray-600">Careers at OptiCare</b>
            </h3>
            <p>Learm more about our teams and job openings.</p>
          </div>
          <div className="flex flex-col">
            <button className="border border-gray-800 p-2 mt-4 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer hover:border-none">
              Explore Jobs
            </button>
            <button
              onClick={() => navigate("/feedback")}
              className="border border-gray-800 group flex items-center justify-center p-2 mt-4 hover:bg-primary hover:text-white  transition-all duration-300 cursor-pointer hover:border-none"
            >
              Feedback Form<FaArrowRightLong className="ml-3 transition-all duration-500 group-hover:translate-x-3 group-hover:text-white" /> 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
