import React from "react";
import { assets } from "../assets/assets_frontend/assets";

function About() {
  return (
    <div className="px-6 py-10">
      <h1 className="text-center text-3xl font-extralight">
        ABOUT <span className="font-semibold">US</span>
      </h1>

      <div className="flex flex-col md:flex-row gap-8 mt-8 items-start">
        {/* Image Section */}
        <div className="md:w-1/3 w-full mt-3">
          <img
            src={assets.about_image}
            alt="About OptiCare"
            className="w-full h-auto object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-2/3 w-full text-[17px] font-light space-y-6">
          <p>
            Welcome to <strong>OptiCare</strong>, your trusted partner in
            managing your healthcare needs with ease and efficiency.
          </p>
          <p>
            At OptiCare, we understand the challenges individuals face when it
            comes to scheduling doctor appointments and managing their health
            records. That’s why we’re here to simplify every step of your
            healthcare journey.
          </p>
          <p>
            OptiCare is committed to excellence in healthcare technology. We
            continually enhance our platform by integrating the latest
            innovations to improve user experience and deliver top-tier service.
            Whether you’re booking your first consultation or managing ongoing
            care, OptiCare is here to support you—every step of the way.
          </p>

          <div>
            <h2 className="font-semibold text-xl mb-2">Our Vision</h2>
            <p>
              At OptiCare, our vision is to create a seamless and accessible
              healthcare experience for every user. We strive to bridge the gap
              between patients and healthcare providers, making it easier for
              you to get the care you need, exactly when you need it.
            </p>
          </div>
        </div>
      </div>
      
      <div className="my-6">
        <h1 className="text-xl my-4 font-extralight">
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
       <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personlization:</b>
          <p>Tailored recommendations and reminders to help you  stay on top of your health.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
