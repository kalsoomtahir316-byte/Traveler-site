import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [q, setQ] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const nav = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const p = new URLSearchParams();
    if (q.trim()) p.set("q", q.trim());
    if (min) p.set("min", String(min));
    if (max) p.set("max", String(max));
    nav(`/tours?${p.toString()}`);
  };

  return (
    <form className="searchBar" onSubmit={onSubmit}>
      <input className="input" placeholder="Destination (e.g. Hunza, Dubai, Istanbul)" value={q} onChange={(e) => setQ(e.target.value)} />
      <input className="input" type="number" placeholder="Min $" value={min} onChange={(e) => setMin(e.target.value)} />
      <input className="input" type="number" placeholder="Max $" value={max} onChange={(e) => setMax(e.target.value)} />
      <button className="btn" type="submit">Search</button>
    </form>
  );
}