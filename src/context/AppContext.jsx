import { createContext, useEffect, useState } from "react";
import { doctors } from "../assets/assets_frontend/assets";

export const AppContext = createContext();
const AppContextProvider = (props) => {
  const [appointment, setAppointment] = useState([]);
 
 useEffect(()=>{
    const save=localStorage.getItem("Appointment");
    if(save){
      setAppointment(JSON.parse(save))
    }

  },[]);
  useEffect(()=>{
  localStorage.setItem("Appointment",JSON.stringify(appointment));
  },[appointment])

  const addToCart = (info) => {
    const isAlreadyBooked = appointment.some(
    (item) =>
      item._id === info._id &&
      item.appointmentDate === info.appointmentDate &&
      item.appointmentTime === info.appointmentTime
  );

  if (isAlreadyBooked) {
    alert("You have already booked this doctor for the same date and time.");
    return;
  }
  alert("Booking confirmed. Thank you!");

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
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
export default AppContextProvider;
