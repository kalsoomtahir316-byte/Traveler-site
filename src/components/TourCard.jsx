import React from "react";
import { Link } from "react-router-dom";

export default function TourCard({
  tour,
  onView,
  showButton = true,
  useLink = false,
  buttonLabel = "View",
}) {
  const seed = `${tour?.id || "x"}-${Math.floor(Math.random() * 100000)}`;
  const imgSrc = tour?.image || `https://picsum.photos/seed/${seed}/600/400`;

  return (
    <div className="card">
      <img
        src={imgSrc}
        alt={tour?.title || "Tour image"}
        loading="lazy"
        referrerPolicy="no-referrer"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = `https://picsum.photos/seed/fallback-${seed}/600/400`;
        }}
      />
      <div className="cardBody">
        <h3>{tour.title}</h3>
        <p>{tour.location}</p>
        <p>{tour.days}</p>
        <p>{tour.price}</p>

        {showButton &&
          (useLink ? (
            <Link to={`/tours/${tour.id}`} className="btn">
              {buttonLabel}
            </Link>
          ) : (
            <button className="btn" onClick={() => onView?.(tour)}>
              {buttonLabel}
            </button>
          ))}
      </div>
    </div>
  );
}