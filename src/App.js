import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Pages/Home";
import About from "./Pages/About";
import HowToDonate from "./Pages/How To Donate";
import NeedAnOrganPage from "./Pages/Need An Organ";
import ContactUs from "./Pages/Contact Us";


const App = () => {
  return (
    <Router>
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-to-donate" element={<HowToDonate />} />
        <Route path="/need-an-organ" element={<NeedAnOrganPage />} />
        <Route path="/contact-us" element={<ContactUs />} />




      </Routes>
    </Router>
  );
};

export default App;
