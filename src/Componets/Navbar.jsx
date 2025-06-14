import React, { useState } from "react";

import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";
import { TbBrandBooking } from "react-icons/tb";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { FaRegCalendarDays } from "react-icons/fa6";
import Login from "./Login";


function Navbar() {
  const navigate = useNavigate();
  const [showMenu, setShowmenu] = useState(false);

 
  const location = useLocation();

  return (
    <div className="flex items-center text-[17px] py-4 mb-5 border-b border-b-gray-400  justify-between ">
      <img src={assets.logo} onClick={()=>navigate('/')}   alt="" className="w-[10%] h-[7%] " />
      <ul className=" hidden md:flex justify-center gap-5  items-start">
        <NavLink to="/">
          <li className="py-1 ">Home</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">All Doctors</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">About</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">Contact</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <Login/>
      
    </div>
  );
}

export default Navbar;
