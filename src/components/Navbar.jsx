import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaConciergeBell,
  FaEnvelope,
  FaPlane,
} from "react-icons/fa";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar" style={{ borderBottom: "2px solid #f0f0f0" }}>
      <div className="logo" style={{ display: "flex", alignItems: "center" }}>
        <FaPlane style={{ marginRight: "10px", color: "#4a6bff" }} />
        <span>Travelo</span>
      </div>
      <ul className="nav-links" style={{ gap: "2rem" }}>
        <li>
          <Link
            to="/"
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <FaHome />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <FaInfoCircle />
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <FaConciergeBell />
            <span>Services</span>
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <FaEnvelope />
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
