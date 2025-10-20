import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { tours as allTours } from "../data/tours";

export default function TourFilters() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const countries = useMemo(() => {
    const set = new Set();
    allTours.forEach(t => t.location && set.add(String(t.location).trim()));
    return Array.from(set).sort();
  }, []);

  const def = useMemo(() => ({
    q: params.get("q") || "",
    country: params.get("country") || "",
    min: params.get("min") || "",
    max: params.get("max") || "",
    sort: params.get("sort") || "",
  }), [params]);

  const [q, setQ] = useState(def.q);
  const [country, setCountry] = useState(def.country);
  const [min, setMin] = useState(def.min);
  const [max, setMax] = useState(def.max);
  const [sort, setSort] = useState(def.sort);

  useEffect(() => {
    setQ(def.q); setCountry(def.country); setMin(def.min); setMax(def.max); setSort(def.sort);
  }, [def]);

  const submit = (e) => {
    e.preventDefault();
    const p = new URLSearchParams();
    if (q) p.set("q", q);
    if (country) p.set("country", country);
    if (min) p.set("min", min);
    if (max) p.set("max", max);
    if (sort) p.set("sort", sort);
    navigate(`/tours?${p.toString()}`);
  };

  const clear = () => { setQ(""); setCountry(""); setMin(""); setMax(""); setSort(""); navigate("/tours"); };

  return (
    <form className="filters" onSubmit={submit}>
      <input className="in" placeholder="Search by title or location…" value={q} onChange={(e)=>setQ(e.target.value)} />

      <select className="in" value={country} onChange={(e)=>setCountry(e.target.value)}>
        <option value="">All Countries</option>
        {countries.map(c => <option key={c} value={c}>{c}</option>)}
      </select>

      <input className="in" type="number" min="0" placeholder="Min $" value={min} onChange={(e)=>setMin(e.target.value)} />
      <input className="in" type="number" min="0" placeholder="Max $" value={max} onChange={(e)=>setMax(e.target.value)} />

      <select className="in" value={sort} onChange={(e)=>setSort(e.target.value)}>
        <option value="">Sort</option>
        <option value="price-asc">Price ↑</option>
        <option value="price-desc">Price ↓</option>
        <option value="days-asc">Days ↑</option>
        <option value="days-desc">Days ↓</option>
      </select>

      <button className="btn">Apply</button>
      <button type="button" className="btn" style={{background:"#666"}} onClick={clear}>Clear</button>
    </form>
  );
}