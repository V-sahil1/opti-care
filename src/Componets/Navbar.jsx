import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";
import Login from "./Login";

function Navbar() {
  const navigate = useNavigate();
  const [showMenu, setShowmenu] = useState(false);
  const location = useLocation();

  return (
    <div className="flex items-center text-[17px] py-4 mb-5 border-b border-b-gray-400 justify-between px-4 relative">
      {/* Logo */}
      <img
        src={assets.logo}
        onClick={() => navigate("/")}
        alt="Logo"
        className="w-[120px] cursor-pointer"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-center gap-6 items-start">
        <NavLink to="/" className={({ isActive }) => isActive ? "font-semibold text-primary" : ""}>
          <li className="py-1">Home</li>
        </NavLink>
        <NavLink to="/doctors" className={({ isActive }) => isActive ? "font-semibold text-primary" : ""}>
          <li className="py-1">All Doctors</li>
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "font-semibold text-primary" : ""}>
          <li className="py-1">About</li>
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "font-semibold text-primary" : ""}>
          <li className="py-1">Contact</li>
        </NavLink>
      </ul>

      {/* Login Button */}
      <div className="hidden md:block">
        <Login />
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden z-50">
        <img
          onClick={() => setShowmenu(!showMenu)}
          className="w-6 cursor-pointer"
          src={showMenu ? assets.cross_icon : assets.menu_icon}
          alt="Menu Toggle"
        />
      </div>

      {/* Mobile Menu Dropdown */}
      {showMenu && (
        <div className="absolute top-full w-full left-[-2px] text-center bg-white border rounded-lg shadow-md py-4 px-2 flex flex-col gap-4 text-sm z-40 md:hidden">
          <NavLink to="/" onClick={() => setShowmenu(false)}>Home</NavLink>
          <NavLink to="/doctors" onClick={() => setShowmenu(false)}>All Doctors</NavLink>
          <NavLink to="/about" onClick={() => setShowmenu(false)}>About</NavLink>
          <NavLink to="/contact" onClick={() => setShowmenu(false)}>Contact</NavLink>
          <div className="pt-2 border-t flex items-center justify-center">
            <Login />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
