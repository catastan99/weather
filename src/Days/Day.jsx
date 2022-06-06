import React from "react";

function Day(props) {
  const { date, dayMeteo, hourMeteo, onClick } = props;
  return (
    <div className="Day">
      <p className="date">{date.slice(8, 11) + "." + date.slice(5, 7)}</p>
      <p className="details">{dayMeteo.condition.text}</p>
      <p className="temp">
        <b>Min:</b> {dayMeteo.mintemp_c}&deg;C
      </p>
      <p className="temp">
        <b>Max:</b> {dayMeteo.maxtemp_c}&deg;C
      </p>
      <p className="temp">
        <b>Max Wind:</b> {dayMeteo.maxwind_kph}km/h
      </p>
      <p className="temp">
        <b>Humidity:</b> {dayMeteo.avghumidity}%
      </p>
      <div className="icon">
        <img src={dayMeteo.condition.icon} alt="icon" />
      </div>
      <button className="btn" onClick={() => onClick(hourMeteo)}>
        More details
      </button>
    </div>
  );
}

export default Day;
