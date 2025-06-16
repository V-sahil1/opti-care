import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import React, { useContext } from "react";
import { FaRegCalendarDays } from "react-icons/fa6";
import { TbBrandBooking } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Login() {
  const { openSignIn } = useClerk();
  const {user}= useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-4">
      {user ? (
        <UserButton>
          <UserButton.MenuItems>
            <UserButton.Action
              label="My Profile"
              labelIcon={<TbBrandBooking />}
              onClick={() => navigate("/my-profile")}
            />
            <UserButton.Action
              label="My Appointments"
              labelIcon={<FaRegCalendarDays />}
              onClick={() => navigate("/my-appointments")}
            />
          </UserButton.MenuItems>
        </UserButton>
      ) : (
        <button
          id=""
          onClick={openSignIn}
          className="bg-[#004D80] hover:bg-[#008ECF] text-white px-8 py-3 rounded-full font-light   md:block"
        >
          Create Account
        </button>
      )}
    </div>
  );
}

export default Login;
