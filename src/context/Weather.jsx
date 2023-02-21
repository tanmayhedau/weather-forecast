import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity, getWeatherDataForLocation } from "../api";

const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState(null);

  const fetchData = async () => {
    const response = await getWeatherDataForCity(search);
    setData(response);
  };

  const fetchCurrentUserLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      //   console.log(position);
      getWeatherDataForLocation(
        position.coords.latitude,
        position.coords.longitude
      ).then((data) => setData(data));
    });
  };

  return (
    <WeatherContext.Provider
      value={{ search, data, setSearch, fetchData, fetchCurrentUserLocation }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
