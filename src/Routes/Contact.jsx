import React from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <div className="contact-section">
        <h2>Contact Us</h2>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

export default Contact;
