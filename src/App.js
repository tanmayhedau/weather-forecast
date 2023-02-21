import "./App.css";
import { useEffect } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";
import { useWeather } from "./context/Weather";

function App() {
  const weather = useWeather();
  // console.log(weather);

  useEffect(() => {
    weather.fetchCurrentUserLocation();
  }, []);

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input />
      <Button onClick={weather.fetchData} value="Search" />
      <Card />
    </div>
  );
}

export default App;
