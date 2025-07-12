import React from "react";
import { FaHotel, FaCarAlt, FaPassport, FaCameraRetro } from "react-icons/fa";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import "../App.css";

function Service() {
  const services = [
    {
      icon: <FaHotel className="service-icon" />,
      title: "Hotel Booking Services",
      description: `We provide access to over 500,000 properties worldwide, from budget-friendly hostels to luxurious 5-star resorts. Our hotel booking service includes exclusive member discounts, free cancellation options, and personalized recommendations based on your travel style. Our team verifies all listings to ensure quality standards, cleanliness, and safety measures are met. Special features include:`,
      features: [
        "Best price guarantee",
        "24/7 customer support",
        "Last-minute deals",
        "Loyalty rewards program",
        "Family-friendly options",
      ],
    },
    {
      icon: <FaCarAlt className="service-icon" />,
      title: "Transportation Solutions",
      description: `From airport transfers to cross-country road trips, we offer comprehensive transportation services tailored to your needs. Choose from our wide selection of vehicles including economy cars, luxury sedans, SUVs, and minivans. Our services include:`,
      features: [
        "One-way rentals available",
        "24/7 roadside assistance",
        "GPS navigation systems",
        "Child safety seats",
        "Electric vehicle options",
      ],
    },
    {
      icon: <FaPassport className="service-icon" />,
      title: "Visa & Travel Documentation",
      description: `Navigating international travel requirements can be complex. Our visa specialists provide end-to-end assistance for all your travel documentation needs, including:`,
      features: [
        "Visa application processing",
        "Travel insurance packages",
        "Vaccination requirements guidance",
        "Notarization services",
        "Emergency document replacement",
      ],
    },
    {
      icon: <FaCameraRetro className="service-icon" />,
      title: "Travel Experiences",
      description: `Enhance your journey with our premium travel experience services designed to create unforgettable memories:`,
      features: [
        "Professional travel photography sessions",
        "Local expert-guided tours",
        "Custom itinerary planning",
        "Culinary experiences",
        "Adventure activity bookings",
      ],
    },
  ];

  return (
    <>
      <section className="services-section">
        <div className="services-header">
          <h1 className="services-title">Our Premium Travel Services</h1>
          <p className="services-subtitle">
            Discover how we make every journey seamless and memorable with our
            comprehensive range of travel solutions
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon-container">{service.icon}</div>
              <h2 className="service-card-title">{service.title}</h2>
              <p className="service-card-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i} className="service-feature-item">
                    <span className="feature-bullet">•</span> {feature}
                  </li>
                ))}
              </ul>
              <button className="service-learn-more">Learn More</button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Service;
