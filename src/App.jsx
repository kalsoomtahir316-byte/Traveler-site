import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Landing from "./Pages/Landing";
import Tours from "./Pages/Tours";
import TourDetails from "./Pages/TourDetails";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">  
      <Navbar />

      <main className="main">  
        <div style={{ padding: "20px 40px", maxWidth: "1200px", margin: "0 auto" }}>
          <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/tours" element={<Tours />} />
       <Route path="/tours/:id" element={<TourDetails />} />  
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
</Routes>  
        </div>
      </main>

      <Footer />  
    </div>
  );
}