import React, { useState, useEffect } from "react";
import { useProvidedContext } from "../ProviderContext";
import WeatherItem from "./WeatherItem";
import { GetWeatherData } from "../../services/WeatherService";

function WeatherShow() {
  const providedData = useProvidedContext();

  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      const weatherData = await GetWeatherData(providedData.selectedCity);
      setWeatherData(weatherData);
    }

    fetchMyAPI();
  }, [providedData.selectedCity]);

  return (
    <div className="weather-show">
      {weatherData.map((item, index) => {
        let values = {
          ...item,
          isFirst: index === 0 ? true : false,
        };

        return <WeatherItem key={index} item={values} />;
      })}
    </div>
  );
}

export default WeatherShow;
