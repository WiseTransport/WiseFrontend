import { useState } from "react";

import { Map } from "@/components/Map";
import Sidebar from "@/components/Sidebar";
import BottomPanel from "@/components/BottomPanel";
import SearchBar from "@/components/SearchBar";
import ShowingCurrentGeo from "@/components/ShowingCurrentGeo";

const searchLocation = async (query: string) => {
  if (!query) return;

  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`,
  );

  const data = await response.json();

  if (data.length > 0) {
    return {
      latitude: parseFloat(data[0].lat),
      longitude: parseFloat(data[0].lon),
    };
  }

  return null;
};

export default function IndexPage() {
  const [location, setLocation] = useState({
    latitude: 42.5,
    longitude: 27.47,
  });

  const handleSearch = async (query: string) => {
    const result = await searchLocation(query);

    if (result) setLocation(result);
  };

  return (
    <div className="h-full w-full">
      <SearchBar onSearch={handleSearch} />
      <Sidebar />
      <Map location={location} setLocation={setLocation} />
      <ShowingCurrentGeo setLocation={setLocation} />
      <BottomPanel />
    </div>
  );
}
