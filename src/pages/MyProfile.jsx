import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

function MyProfile() {
  const defaultData = {
    name: "Yash Patel",
    image: assets.profile_pic,
    email: "sahilvardekar89@gmail.com",
    phone: "+91-98595-89758",
    address: {
      line1: "Flat No. 204, Sunrise Residency",
      line2: "Borivali East, Mumbai – 400066",
    },
    gender: "Male",
    dob: "2000-01-21"
  }
  const [userData, setUserData] = useState(defaultData);
  const [isEdit, setIsEdit] = useState(false);
  useEffect(()=>{
    const saveData=localStorage.getItem("userProfile");
    if(saveData){
      setUserData(JSON.parse(saveData))
    }
  },[]);
  const handleDate=()=>{
    localStorage.setItem("userProfile",JSON.stringify(userData));
    setIsEdit(false);
  }
  return (
    <div className="max-w-lg flex-col flex gap-2 text-sm">
      
      <img className="w-36 rounded"  src={userData.image} alt="" />
      {isEdit ? (
        <input className="border border-gray-200 text3xl font-medium max-w-60 mt-4"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
          type="text"
          name=""
          id=""
          placeholder="Enter Your Name"
          required
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">{userData.name}</p>
      )}
      <hr className="bg-zinc-400 h-[1px] border-none" />
      <div>
        <p className="text-neutral-500  text-xl underline mt-3">Contact Information</p>
        <div className="text-[15px] mt-4">
          <div className="flex  gap-9 mt-4 py-3 flex-row">
            
            <p className="gap-1">Email :</p>
          {isEdit ? (
            <input
            className="border border-gray-200 text3xl font-medium max-w-60 "
              value={userData.email}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, email: e.target.value }))
              }
              type="email"
              name=""
              id=""
              placeholder="Enter Your Email"
              required
            />
          ) : (
          <p className="text-blue-600 hover:text-violet-600 underline cursor-pointer">{userData.email}</p>)}
          </div>
          
          <div className="flex  gap-9 py-3  flex-row">
                <p className="pr-2">Phone:</p>
          {isEdit ? (
            <input
            className="border border-gray-200 text3xl font-medium max-w-60 "
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
              type="number"
              name=""
              id=""
              placeholder="Enter Your PhoneNumber"
              required
            />
          ) : (
            <p className="text-blue-600 hover:text-violet-600 underline cursor-pointer">{userData.phone}</p>
          )}
          </div>
      <div className="flex  gap-9 py-3 flex-row">
        <p>Address:</p>
          {isEdit ? (
            <p>
              <input
              className="border border-gray-200 text3xl font-medium max-w-60 "
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev, line1: e.target.value },
                  }))
                }
                value={userData.address.line1}
                type="text"
                name=""
                id=""
                placeholder="Enter Your Address line1"
                required
              />
              <br />
              <input
              className="border border-gray-200 text3xl font-medium max-w-60 mt-2 "
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev, line2: e.target.value },
                  }))
                }
                value={userData.address.line2}
                type="text"
                name=""
                id=""
                placeholder="Enter Your Address line2"
                required
              />
            </p>
          ) : (
            <p>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
      </div>
          
        </div>
      </div>
      <div className="">
        <p className="text-neutral-500  text-xl underline mt-3">Basic Information</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
            className="max-w-20 bg-gray-100"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
              required
            >
              <option value="Male">Male</option>
              <option value=" Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}
          <p className="font-medium">Birthday:</p>
           {isEdit ? 
        <input
        className="max-w-28 bg-gray-100"
          value={userData.dob}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, dob: e.target.value }))
          }
          type="date"
          required
        />
     : 
        <p className="text-gray-400">{userData.dob}</p>
      }
        </div>
      </div>
      <div className="mt-10">{
        isEdit?
      <button className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all" onClick={handleDate}>Save Information</button>:
      <button className="border border-primary px-8 py-2 rounded-full  hover:bg-primary hover:text-white transition-all" onClick={()=>setIsEdit(true)}>Edit</button>}</div>
    </div>
  );
}

export default MyProfile;
