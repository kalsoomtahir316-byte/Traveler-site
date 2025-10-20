import Featured from "../components/Featured";
import { TOURS } from "../data/tours";
import TourCard from "../components/TourCard";
export default function Home() {
  return (
    <>
      <Featured />
      <h2 style={{ marginTop: 24 }}>Popular Tours</h2>
      <div className="grid">
        {TOURS.slice(0, 6).map((t) => (
          <TourCard key={t.id} tour={t} />
        ))}
      </div>
    </>
  );
}