import React from "react";
import { FaMapMarkerAlt, FaStar, FaRegCalendarAlt } from "react-icons/fa";
import "../App.css";
import switzerlandImg from "../images/switzerland.jpg";
import maldivesImg from "../images/maldives.jpg";
import dubaiImg from "/images/dubaii>.jpg";

function Destination() {
  const destinations = [
    {
      image: switzerlandImg,
      title: "Switzerland",
      description:
        "Discover the magical charm of Switzerland where snow-capped Alps, crystal-clear lakes, and charming villages come together in a breathtaking landscape. From skiing in the Swiss Alps to exploring Zurich's lively culture, Switzerland offers something for every traveler.",
      rating: 4.9,
      price: "$2,499",
      duration: "7 Days",
      features: ["Alpine Skiing", "Luxury Trains", "Chocolate Tours"],
    },
    {
      image: maldivesImg,
      title: "Maldives",
      description:
        "Experience paradise on earth in the Maldives – crystal-clear turquoise waters, luxury water villas, and vibrant coral reefs. Ideal for honeymoons, relaxing vacations, and unforgettable sunsets over the Indian Ocean.",
      rating: 4.8,
      price: "$3,199",
      duration: "5 Days",
      features: ["Overwater Bungalows", "Snorkeling", "Spa Retreats"],
    },
    {
      image: dubaiImg,
      title: "Dubai",
      description:
        "Welcome to Dubai – where modern architecture meets rich culture. From the iconic Burj Khalifa and luxury shopping malls to desert safaris and traditional souks, Dubai is the perfect blend of adventure and luxury.",
      rating: 4.7,
      price: "$1,899",
      duration: "4 Days",
      features: ["Desert Safari", "Burj Khalifa", "Gold Souk"],
    },
  ];

  return (
    <section className="destinations-section">
      <div className="section-header">
        <h2>Featured Destinations</h2>
        <p>Explore our most popular travel destinations</p>
      </div>

      <div className="destinations-grid">
        {destinations.map((dest, index) => (
          <div className="destination-card" key={index}>
            <div className="card-image">
              <img src={dest.image} alt={dest.title} />
              <div className="price-tag">{dest.price}</div>
            </div>

            <div className="card-content">
              <div className="card-header">
                <h3>{dest.title}</h3>
                <div className="rating">
                  <FaStar className="star-icon" />
                  <span>{dest.rating}</span>
                </div>
              </div>

              <p className="description">{dest.description}</p>

              <div className="duration">
                <FaRegCalendarAlt className="icon" />
                <span>{dest.duration}</span>
              </div>

              <div className="features">
                {dest.features.map((feature, i) => (
                  <span key={i} className="feature-tag">
                    <FaMapMarkerAlt className="icon" />
                    {feature}
                  </span>
                ))}
              </div>

              <button className="explore-btn">Explore Package</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destination;
