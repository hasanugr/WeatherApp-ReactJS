import axios from "axios";

const API_KEY = "13b0d3e01664ba700e4eca48e61350d7";
const REQUEST_TYPE_ONECALL = "https://api.openweathermap.org/data/2.5/onecall";
const REQUEST_TYPE_COORDINATE = "http://api.openweathermap.org/geo/1.0/direct";
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const GetWeatherData = async (cityName) => {
  const coordinate = await GetCoorinatesOfCity(cityName);
  const forecast = await GetWeatherForecast(coordinate.lat, coordinate.lon);

  let resultData = [];
  forecast.daily.map((item) => {
    return resultData.push({
      day: GetNameOfDay(item.dt),
      status: item.weather[0].icon,
      minDegree: item.temp.min,
      maxDegree: item.temp.max,
    });
  });

  return resultData;
};

const GetNameOfDay = (unixEpochTime) => {
  const d = new Date(unixEpochTime * 1000);
  const dayName = DAYS[d.getDay()];
  return dayName;
};

const GetWeatherForecast = async (lat, lon) => {
  const data = await axios(
    `${REQUEST_TYPE_ONECALL}?appid=${API_KEY}&lat=${lat}&lon=${lon}&units=metric&cnt=7&lang=tr`
  );
  return data.data;
};

const GetCoorinatesOfCity = async (cityName) => {
  const data = await axios(
    `${REQUEST_TYPE_COORDINATE}?appid=${API_KEY}&q=${cityName},tr`
  );
  return data.data[0];
};

export { GetWeatherData };
