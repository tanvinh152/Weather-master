export const fetchLocationId = async city => {
  const API_KEY = "be3ce83f95c0e6f36303f68b4f127ba4";
  const api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  const response = await fetch(api);
  const locations = await response.json();
  const {name, main, weather} = locations;
  const {temp} = main;
  return {
    location: name,
    weather: weather[0].main,
    temperature: temp,
    description: weather[0].description
  }; 
};

