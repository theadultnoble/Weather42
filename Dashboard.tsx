import React from "react";
import NavBar from "./src/components/NavBar";
import Icon from "./src/components/Icon";
import PlaceCard from "./src/components/PlaceCard";
import SearchBar from "./src/components/SearchBar";
import WeatherCards from "./src/components/WeatherCards";

function Dashboard() {
  return (
    <div className="max-h-screen bg-zinc-900 p-3">
      <NavBar />
    </div>
  );
}

export default Dashboard;
