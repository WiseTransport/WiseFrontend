import { useState } from "react";

import Map from "@/components/map";
import Sidebar from "@/components/sidebar";
import BottomPanel from "@/components/bottom-panel";
import Button from "@/components/button";
import SearchBar from "@/components/searchBar";

const searchLocation = async (query: string) => {
  if (!query) return;

  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`
  );

  const data = await response.json();

  if (data.length > 0) {
    return {
      lat: parseFloat(data[0].lat),
      lon: parseFloat(data[0].lon),
    };
  }

  return null;
};

export default function IndexPage() {
  const [location, setLocation] = useState({ lat: 42.5, lon: 27.47 });

  const handleSearch = async (query: string) => {
    const result = await searchLocation(query);

    if (result) setLocation(result);
  };

  return (
    <div className="h-full w-full">
      <SearchBar onSearch={handleSearch} />
      <Sidebar />
      <Map location={location} />
      <Button />
      <BottomPanel />
    </div>
  );
}
