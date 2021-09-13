import React from "react";

function WeatherItem({ item }) {
  return (
    <div className={item.isFirst ? `weather-item first-day` : `weather-item`}>
      <span className="item-field item-name">{item.day}</span>
      <img
        className="item-field item-image"
        alt={item.day}
        src={`http://openweathermap.org/img/wn/${item.status}@2x.png`}
      />
      <div className="item-field item-degree-container">
        <span className="item-degree">{parseInt(item.minDegree)}°</span>
        <span className="item-degree">{parseInt(item.maxDegree)}°</span>
      </div>
    </div>
  );
}

export default WeatherItem;
