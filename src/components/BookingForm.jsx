export default function BookingForm({ tour, onClose }) {
  if (!tour) return null;

  const phone = "923001234567"; 
  const msg = encodeURIComponent(
    `Hi, I'm interested in booking:\n${tour.title} - ${tour.location}\n${tour.days}, ${tour.price}`
  );
  const wa = `https://wa.me/${phone}?text=${msg}`;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Book Now</h2>
        <h3>{tour.title}</h3>
        <p>{tour.location} • {tour.days} • {tour.price}</p>

        <form className="simple-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <a href={wa} target="_blank" rel="noreferrer" className="btn primary">
            Message on WhatsApp
          </a>
        </form>
      </div>
    </div>
  );
}