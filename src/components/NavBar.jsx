import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="nav">
      <Link to="/" className="brand">Traveler</Link>

      <nav className="links" style={{ display: "flex", alignItems: "center" }}>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/tours">Tours</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <ThemeToggle />
      </nav>
    </header>
  );
}