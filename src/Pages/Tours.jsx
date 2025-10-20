import { useState } from "react";
import {TOURS} from "../data/tours";
import "../styles/tours.css";
import BookingForm from "../components/BookingForm";

export default function Tours() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="tours-page">
      <h1>Tours</h1>
      <div className="tours-grid">
        {TOURS.map((tour) => (
          <div key={tour.id} className="tour-card">
           <img
         src={tour.image}
         alt={tour.title}
         loading="lazy"
         referrerPolicy="no-referrer"
         onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = "/images/hunza.jpg"; 
    }
  }
/>
            <div className="tour-body">
              <h3>{tour.title}</h3>
              <p>{tour.location} • {tour.days} • {tour.price}</p>
              <p className="tour-desc">{tour.description}</p>
              <button
                className="btn primary"
                onClick={() => setSelected(tour)}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <BookingForm
          tour={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}