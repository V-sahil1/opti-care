import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { QRCodeSVG } from "qrcode.react";
import Swal from "sweetalert2";

function MyAppointment() {
  const { appointment, setAppointment } = useContext(AppContext);
  const [showQR, setShowQR] = useState(false);
  const handlePayment = () => {
    setShowQR(true);
  };
  const removedoclist = (docId, date, time) => {
    const updatedList = appointment.filter(
      (item) =>
        !(
          item._id === docId &&
          item.appointmentDate === date &&
          item.appointmentTime === time
        )
    );

    setAppointment(updatedList);
    Swal.fire({
      title: "Cancelled",
      text: "Your appointment has been cancelled successfully.",
      icon: "success",
    });
  };

  return (
    <div>
      <p className="pb-3 mt-12 mb-3 font-medium text-zinc-700 border-b">
        My Appointments
      </p>

      <div>
        {appointment.length === 0 ? (
          <p className="text-gray-500">No appointments booked.</p>
        ) : (
          appointment.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[1fr_2fr] gap-2 sm:flex sm:gap-6 border-b mb-3"
            >
              <div className="w-1/3 max-w-[150px]">
                <img src={item.image} alt="" className=" bg-indigo-50" />
              </div>
              <div className="flex-1 text-sm text-zinc-600">
                <p className="text-neutral-800 font-semibold">{item.name}</p>
                <p className="text-neutral-600">{item.speciality}</p>
                <p className="mt-2 text-zinc-700 font-medium">Address:</p>
                <p className="text-xs">{item.address.line1}</p>
                <p className="text-xs ">{item.address.line2}</p>
                <p className="mt-2 text-sm ">
                  <span className="text-sm mt-1 text-neutral-700 font-medium">
                    Date & Time:
                  </span>{" "}
                  {item.appointmentDate} | {item.appointmentTime}
                </p>
                <p className="text-sm text-gray-700 font-medium mb-3">
                  Fees: ₹{item.fees}
                </p>
              </div>
              <div></div>
              <div className=" flex flex-col gap-2 justify-center items-start">
                <button
                  onClick={handlePayment}
                  className="mt-3 px-4 py-2 mr-3 bg-primary text-white text-sm  rounded hover:bg-blue-600"
                >
                  Pay Online
                </button>

                {showQR && (
                  <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black bg-opacity-30">
                    <div className="bg-white p-6 rounded-lg text-center flex flex-col items-center">
                      <h2 className="text-lg font-bold text-zinc-800 mb-4">
                        Scan QR Code to Pay ₹{item.fees}
                      </h2>
                      <QRCodeSVG
                        value={`upi://pay?pa=vardekarsahil34@okicici&pn=VARDEKARSAHIL&am=${item.fees}&cu=INR&tn=Tomato`}
                      />

                      <button
                        className="
               mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-500"
                        onClick={() => setShowQR(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}

                <button
                  onClick={() =>
                    removedoclist(
                      item._id,
                      item.appointmentDate,
                      item.appointmentTime
                    )
                  }
                  className="mt-3 px-4 py-2 bg-white text-black border border-primary  text-sm rounded  hover:bg-red-600 hover:text-white"
                >
                  Cancel Appointment
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MyAppointment;
