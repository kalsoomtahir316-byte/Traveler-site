import React from "react";
import { Link } from "react-router-dom";
// ...
<Link to="/tours" className="btn">Travel Plan</Link>

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Your Journey Your Story</h1>
        <p>Choose Your Favourite Destination.</p>
        <Link to="/tours" className="btn">Travel Plan</Link>
      </div>
    </section>
  );
}