
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaTag, FaPaperPlane } from "react-icons/fa";
import "../App.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll contact you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="simple-contact-container">
      <div className="simple-contact-header">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you. Send us a message below.</p>
      </div>

      <form onSubmit={handleSubmit} className="simple-contact-form">
        <div className="simple-form-group">
          <div className="input-with-icon">
            <FaUser className="input-icon" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="simple-form-group">
          <div className="input-with-icon">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="simple-form-group">
          <div className="input-with-icon">
            <FaTag className="input-icon" />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="simple-form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="simple-submit-btn">
          <FaPaperPlane className="submit-icon" /> Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;