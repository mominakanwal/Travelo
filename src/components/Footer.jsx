import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTripadvisor,
} from "react-icons/fa";
import "../App.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand">
            <h3 className="footer-logo">Travelo</h3>
            <p className="footer-tagline">
              Making your travel dreams come true since 2023
            </p>
            <div className="footer-social">
              <a href="https://facebook.com" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://tripadvisor.com" aria-label="TripAdvisor">
                <FaTripadvisor />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/destinations">Destinations</Link>
              </li>
              <li>
                <Link to="/tours">Tours</Link>
              </li>
              <li>
                <Link to="/packages">Packages</Link>
              </li>
              <li>
                <Link to="/blog">Travel Blog</Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="footer-links">
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-menu">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/faq">FAQs</Link>
              </li>
              <li>
                <Link to="/terms">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4 className="footer-heading">Get in Touch</h4>
            <ul className="contact-info">
              <li>
                <FaPhone className="contact-icon" />
                <span>+92 319 8376390</span>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <span>info@travelo.com</span>
              </li>
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <span>Travel Street, Karachi, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Travelo. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
