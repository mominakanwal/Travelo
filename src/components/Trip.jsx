import React from "react";
import {
  FaMapMarkerAlt,
  FaStar,
  FaRegCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";
import "../App.css";
import dubaiImg from "../images/dubaii.jpg";
import maldivesImg from "../images/maldives.jpg";
import switzerlandImg from "../images/switzerland.jpg";
import northernAreasImg from "../images/pakistan.jpg";
import newyorkImg from "../images/amareica.jpg";
import niagaraImg from "../images/canada.jpg";

function Trip() {
  const pastTrips = [
    {
      image: northernAreasImg,
      title: "Northern Pakistan Expedition",
      description:
        "Our January trek through the stunning Hunza Valley and Fairy Meadows was unforgettable. Members experienced the majestic Karakoram mountains and local culture.",
      date: "Jan 15-25, 2023",
      groupSize: "40 travelers",
      highlights: [
        "Hunza Valley sunrise",
        "Nanga Parbat views",
        "Local cuisine",
      ],
    },
    {
      image: newyorkImg,
      title: "New York Winter Getaway",
      description:
        "February's city adventure included Broadway shows, museum tours, and a magical winter experience in Central Park with our group of 8 travelers.",
      date: "Feb 5-12, 2023",
      groupSize: "25 travelers",
      highlights: [
        "Broadway night",
        "Metropolitan Museum",
        "Winter in Central Park",
      ],
    },
    {
      image: niagaraImg,
      title: "Niagara Winter Wonderland",
      description:
        "March's frozen falls tour was breathtaking. Our small group enjoyed the icy spectacle and cozy winery visits in the Niagara region.",
      date: "Mar 10-15, 2023",
      groupSize: "18 travelers",
      highlights: ["Frozen falls tour", "Ice wine tasting", "Winter festival"],
    },
  ];

  const upcomingTrips = [
    {
      image: dubaiImg,
      title: "Dubai Summer Adventure",
      description:
        "Join our upcoming desert safari and city exploration trip this summer. Experience luxury and adventure in the heart of the UAE.",
      date: "Nov 20-27, 2025",
      price: "$2,199",
      features: ["Burj Khalifa", "Desert Safari", "Palm Jumeirah"],
    },
    {
      image: maldivesImg,
      title: "Maldives Retreat",
      description:
        "Our September island getaway promises crystal waters and relaxation. Limited spots available for this exclusive resort experience.",
      date: "Sep 5-13, 2025",
      price: "$3,299",
      features: ["Overwater Bungalows", "Snorkeling", "Private Sandbanks"],
    },
    {
      image: switzerlandImg,
      title: "Swiss Autumn Tour",
      description:
        "Experience the Alps in golden season. This October trip includes mountain railways, chocolate tours, and lake cruises.",
      date: "Oct 10-19, 2025",
      price: "$2,799",
      features: ["Swiss Alps", "Lucerne Lake", "Jungfraujoch"],
    },
  ];

  return (
    <section className="trip-section">
      <div className="section-header">
        <h2>Our Travel Experiences</h2>
        <p>Relive our past adventures and discover upcoming journeys</p>
      </div>

      <div className="trip-category">
        <h3>
          <FaCheckCircle className="icon" /> Past Trips (Early 2023)
        </h3>
        <div className="destinations-grid">
          {pastTrips.map((trip, index) => (
            <div className="trip-card past-trip" key={`past-${index}`}>
              <div className="trip-image">
                <img src={trip.image} alt={trip.title} />
                <div className="trip-badge">Completed</div>
              </div>
              <div className="trip-content">
                <h4>{trip.title}</h4>
                <p className="trip-date">{trip.date}</p>
                <p className="trip-description">{trip.description}</p>

                <div className="trip-meta">
                  <span>
                    <FaRegCalendarAlt /> {trip.date}
                  </span>
                  <span>
                    <FaMapMarkerAlt /> {trip.groupSize}
                  </span>
                </div>

                <div className="trip-highlights">
                  <h5>Highlights:</h5>
                  <ul>
                    {trip.highlights.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="trip-category">
        <h3>Upcoming Trips</h3>
        <div className="destinations-grid">
          {upcomingTrips.map((trip, index) => (
            <div className="trip-card" key={`upcoming-${index}`}>
              <div className="trip-image">
                <img src={trip.image} alt={trip.title} />
                <div className="price-tag">{trip.price}</div>
              </div>
              <div className="trip-content">
                <h4>{trip.title}</h4>
                <p className="trip-date">{trip.date}</p>
                <p className="trip-description">{trip.description}</p>

                <div className="trip-features">
                  {trip.features.map((feature, i) => (
                    <span key={i} className="feature-tag">
                      <FaMapMarkerAlt className="icon" /> {feature}
                    </span>
                  ))}
                </div>

                <button className="inquiry-btn">Request Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trip;
