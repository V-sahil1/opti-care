import { createContext, useEffect, useState } from "react";
import { doctors } from "../assets/assets_frontend/assets";
import Swal from "sweetalert2";
import { useUser } from "@clerk/clerk-react";
import Login from "../Componets/Login";

export const AppContext = createContext();
const AppContextProvider = (props) => {
  const [appointment, setAppointment] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    const save = localStorage.getItem("Appointment");
    if (save) {
      setAppointment(JSON.parse(save));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("Appointment", JSON.stringify(appointment));
  }, [appointment]);

  const addToCart = (info) => {
    const isAlreadyBooked = appointment.some(
      (item) =>
        item._id === info._id &&
        item.appointmentDate === info.appointmentDate &&
        item.appointmentTime === info.appointmentTime
    );
if (!user) {
  Swal.fire({
    title: "Create an Account!",
    text: "You need to sign up to book an appointment.",
    icon: "info",
    
  })
  return;
}



    if (isAlreadyBooked) {
      Swal.fire({
        title: "Already Booked!",
        text: "You've already booked this doctor for the selected date and time.",
        icon: "warning",
      });
      return;
    }

    Swal.fire({
      title: "Success!",
      text: "Booking confirmed. Thank you!",
      icon: "success",
    });

    console.log(info);
    setAppointment((prev) => [...prev, info]);

    // if (!appointment[info]) {
    //   setAppointment((prev) => ({ ...prev, [info]: 1 }));
    // } else {
    //   setAppointment((prev) => ({ ...prev, [info]: prev[info] + 1 }));
    // }
  };

  //   useEffect(() => {
  //    console.log(appointment);

  //   }, [])

  const value = {
    doctors,
    addToCart,
    appointment,
    setAppointment,
    user
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
export default AppContextProvider;
