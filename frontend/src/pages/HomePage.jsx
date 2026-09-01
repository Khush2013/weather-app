import CityCard from "../components/CityCard";
import SearchBar from "../components/SearchBar";
import { PlusIcon } from "lucide-react";

function HomePage() {
  const cities = [
    "Atlanta, GA",
    "Sydney, NSW",
    "Charleston, SC",
    "New York City, NY",
    "Los Angeles, CA",
    "Houston, TX",
    "Los Ranchos de Albuquerque, NM",
  ];

  return (
    <div>
      <SearchBar />
      <button className="btn btn-primary">
        <PlusIcon /> Add Weather Card
      </button>

      <div className="flex">
        {cities.map((city) => (
          <CityCard key={city} title={city} />
        ))}
      </div>
    </div>
  );
}
export default HomePage;
