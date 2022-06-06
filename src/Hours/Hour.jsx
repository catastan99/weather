import React from "react";

function Hour(props) {
  const {
    chanceOfRain,
    condition,
    feelsLike,
    humidity,
    precipMm,
    temp,
    time,
    wind,
    windDirection,
  } = props;
  const hourTime = time.slice(11, 13) + ":" + time.slice(14, 16);
  return (
    <div className="Hour">
      <div className="img">
        <img src={condition.icon} alt="icon" />
      </div>
      <p className="time">{hourTime}</p>
      <p className="temp">{temp}&deg;C</p>
      <p className="condition-text">{condition.text}</p>
      <p>Chance of rain: {chanceOfRain}%</p>
      <p>Feels like: {feelsLike}&deg;C</p>
      <p>Humidity: {humidity}%</p>
      <p>Precip: {precipMm}mm</p>
      <p>Wind: {wind}km/h</p>
      <p>Wind direction: {windDirection}</p>
    </div>
  );
}

export default Hour;
