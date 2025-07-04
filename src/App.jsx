import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";
import MyAppointment from "./pages/MyAppointment";
import Appointment from "./pages/Appointment";
import Navbar from "./Componets/Navbar";
import Footer from "./Componets/Footer";
import Feedback from "./Componets/Feedback";
import Login from "./Componets/Login";

function App() {
  return (
    <>
      <div className="mx-4 sm:mx-[10%]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:speciality" element={<Doctors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/my-appointments" element={<MyAppointment />} />
          <Route path="/appointment/:docId" element={<Appointment />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
