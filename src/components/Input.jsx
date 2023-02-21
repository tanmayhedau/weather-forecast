import React from "react";
import { useWeather } from "../context/Weather";

const Input = () => {
  const weather = useWeather();
  console.log("Weather", weather);
  return (
    <input
      className="input-field"
      value={weather.search}
      placeholder="Search here"
      onChange={(e) => weather.setSearch(e.target.value)}
    />
  );
};

export default Input;
