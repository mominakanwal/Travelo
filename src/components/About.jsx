import React from "react";
import { FaCompass, FaGlobeAmericas, FaUmbrellaBeach } from "react-icons/fa";
import "../App.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h1 className="about-title">
          <FaCompass className="title-icon" /> About Travelo
        </h1>

        <div className="about-content">
          <p className="about-paragraph">
            Welcome to Travelo! Your Journey Begins Here!
          </p>

          <p className="about-paragraph">
            At Travelo, we believe that travel isn't just about going places -
            it's about discovering new stories, making unforgettable memories,
            and experiencing the world with wonder. Whether you're a solo
            explorer, a family on vacation, or friends chasing adventures,
            Travelo is here to make every trip smooth, exciting, and
            unforgettable.
          </p>

          <p className="about-paragraph">
            We are more than just a travel website, we are your trusted travel
            buddy. From finding the best destinations, budget-friendly packages,
            and hidden gems, to giving you real tips from real travelers,
            Travelo makes planning your dream trip easy and fun.
          </p>

          <div className="about-features">
            <div className="feature-card">
              <FaGlobeAmericas className="feature-icon" />
              <h3>Global Destinations</h3>
              <p>Curated selection of the world's most amazing places</p>
            </div>

            <div className="feature-card">
              <FaUmbrellaBeach className="feature-icon" />
              <h3>Tailored Experiences</h3>
              <p>Personalized trips that match your travel style</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
