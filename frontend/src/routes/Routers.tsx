// import page from "@page";
import Home from "@page/Home";
import Login from "@page/Login";
import Signup from "@page/Signup";
import Contact from "@page/Contact";
import Services from "@page/Services";
import Doctors from "@page/Doctores/Doctors";
import DoctorDetails from "@page/Doctores/DoctorDetails";
// import { Routes, Route } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/doctor" element={<Doctors />} />
      <Route path="/doctor/:id" element={<DoctorDetails />} />
    </Routes>
  );
};

export default Routers;
