const baseUrl =
  "http://api.weatherapi.com/v1/current.json?key=e1b9027976284257b8a95227232102";

export const getWeatherDataForCity = async (city) => {
  const response = await fetch(`${baseUrl}&q=${city}&aqi=yes`);
  return await response.json();
};

export const getWeatherDataForLocation = async (lat, lon) => {
  const response = await fetch(`${baseUrl}&q=${lat},${lon}&aqi=yes`);
  return await response.json();
};
