import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets_frontend/assets";
import RelatedDoc from "../Componets/RelatedDoc";
import Swal from "sweetalert2";

function Appointment({}) {
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const { docId } = useParams();
  const { doctors, addToCart, appointment, setAppointment } =
    useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlotes] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const getAvailablesSlots = async () => {
    setDocSlotes([]);
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      const endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0); // till 9 PM

      // Set start time
      if (today.toDateString() === currentDate.toDateString()) {
        const now = new Date();
        now.setMinutes(now.getMinutes() + 30);

        if (now.getHours() >= 21) continue; // Skip if already too late

        currentDate = now;
        currentDate.setMinutes(currentDate.getMinutes() <= 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      const timeSlotes = [];
      while (currentDate < endTime) {
        const formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        timeSlotes.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlotes((prev) => [...prev, timeSlotes]);
    }
  };

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  };
  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailablesSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);
  return (
    docInfo && (
      // && ka matalabe if information availabe hot tohi run or display hona
      <div>
        {/* -------- Doctors Details----------- */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt=""
            />
          </div>
          <div className=" flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            {/* ---------- Doc Info :name,degree,Experience----------- */}
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name} <img src={assets.verified_icon} alt="" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button>{docInfo.experience}</button>
            </div>

            {/* ---------- Doctor About----------- */}
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Appointment fee:{" "}
              <span className="text-gray-600">₹{docInfo.fees}</span>
            </p>
          </div>
        </div>
        {/* -------Booking Slotes-------- */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking Slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {docSlots.length &&
              docSlots.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index
                      ? "bg-primary text-white "
                      : "border border-gray-200"
                  }`}
                  key={index}
                >
                  <p className="">
                    {item[0] && daysOfWeek[item[0].datetime.getDay()]}
                  </p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>
          <div className="flex  gap-3 m overflow-x-scroll mt-4 ">
            {docSlots.length &&
              docSlots[slotIndex].map((item, index) => (
                <p
                  onClick={() => setSlotTime(item.time)}
                  className={` text-sm font-light flex-shrink-0 rounded-full px-5 py-2 cursor-pointer ${
                    item.time === slotTime
                      ? "bg-primary text-white"
                      : "border-gray-200  border"
                  }`}
                  key={index}
                >
                  {item.time.toUpperCase()}
                </p>
              ))}
          </div>
          <button
            onClick={() => {
              const selectedSlot = docSlots[slotIndex].find(
                (slot) => slot.time === slotTime
              );

              if (!selectedSlot) {
                Swal.fire({
                  title: "No Time Selected!",
                  text: "Please select a time slot first.",
                  icon: "info",
                });

                return;
              }

              const appointmentData = {
                ...docInfo,
                appointmentDate: selectedSlot.datetime.toDateString(),
                appointmentTime: selectedSlot.time,
              };

              addToCart(appointmentData);
            }}
            className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6"
          >
            Book An Appointment
          </button>
        </div>
        {/* ----- list of releted Doctors------- */}
        <RelatedDoc docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
}

export default Appointment;
