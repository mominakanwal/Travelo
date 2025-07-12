import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Corrected imports:
import Navbar from "./components/Navbar"; // Fixed path & name
import Home from "./Routes/Home"; // Capital "H" in "Home"
import AboutUs from "./Routes/AboutUs";
import Service from "./Routes/Services"; // Match filename
import Contact from "./Routes/Contact";
import "./App.css"; // Fixed path (no extra "/")

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
