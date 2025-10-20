import { Link } from "react-router-dom";

export default function Featured() {
  return (
    <section className="hero">
      <div className="heroText">
        <h1>Find your next adventure</h1>
        <p>Curated tours with flexible dates and great prices.</p>
        <div className="heroActions">
          <Link to="/tours" className="btn lg">Explore Tours</Link>
        </div>
      </div>
    </section>
  );
}