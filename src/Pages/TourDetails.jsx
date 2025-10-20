import { useParams, Link } from "react-router-dom";
import { TOURS } from "../data/tours";
import BookingForm from "../components/BookingForm";
export default function TourDetails() {
  const { id } = useParams();
  const tour = tours.find((t) => t.id === Number(id));

  if (!tour) {
    return (
      <div style={{ padding: 30 }}>
        <h2>Tour not found</h2>
        <Link to="/tours" className="btn">Back to Tours</Link>
      </div>
    );
  }

  return (
    <div className="tourDetails">
      <img
  src={tour.image}
  alt={tour.title}
  className="heroImg"
  loading="lazy"
  referrerPolicy="no-referrer"
  onError={(e) => {
    e.currentTarget.src = `https://picsum.photos/seed/tour-${tour.id}/1200/600`;
  }}
/>
      <div className="info">
        <h1>{tour.title}</h1>
        <p className="location">{tour.location}</p>
        <p className="days">Duration: {tour.days}</p>
        <p className="price">Price: ${tour.price}</p>

        <p className="desc">
          {tour.description || "This tour offers an amazing travel experience with flexible dates and friendly guides."}
        </p>

        <button
          className="btn"
          onClick={() =>
            window.open(`https://wa.me/923001234567?text=Hello, I'm interested in the ${tour.title} tour!`, "_blank")
          }
        >
          Book Now on WhatsApp
        </button>
        <BookingForm tourTitle={tour.title} />
        <div style={{ marginTop: 20 }}>
          <Link to="/tours" className="btn" style={{ background: "#444" }}>
            ← Back to Tours
          </Link>
        </div>
      </div>
    </div>
  );
}