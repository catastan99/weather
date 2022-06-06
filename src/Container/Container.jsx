import React, { useEffect, useState } from "react";
import Days from "../Days/Days";
import Modal from "../Modal/Modal";
import Search from "../Search/Search";

function Container() {
  const [weatherData, setWeatherData] = useState({});
  const [modalIsDisplayed, setModalIsDisplayed] = useState(false);
  const [modalProp, setModalProp] = useState({});

  const getWetherData = (city) => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=14f14891710d4f70ae9101142220106 &q=${city}&days=5&aqi=no&alerts=no`
    )
      .then((result) => result.json())
      .then((data) => {
        setWeatherData(data);
      });
  };

  useEffect(() => {
    getWetherData("Bucuresti");
  }, []);

  const moreDetailsHandler = (data) => {
    setModalProp(data);
    setModalIsDisplayed(true);
  };

  const closeModal = () => {
    setModalIsDisplayed(false);
  };
  const { location, current } = weatherData;
  return (
    <div className="Container">
      <div className="left-side">
        <p className="company-name">Weather</p>
        <div className="current-weather">
          <p className="temperature">
            {weatherData.current && current.temp_c + "°"}
          </p>
          <div className="location-and-date">
            <p className="city">{weatherData.location && location.name}</p>
            <p className="date">{weatherData.location && location.localtime}</p>
          </div>
          <div className="icon">
            {weatherData.current && (
              <img src={current.condition.icon} alt="icon" />
            )}
          </div>
        </div>
      </div>
      <div className="right-side">
        <Search getData={getWetherData} />
        {weatherData.forecast && (
          <Days
            days={weatherData.forecast.forecastday}
            onClick={moreDetailsHandler}
          />
        )}
      </div>
      {modalIsDisplayed && (
        <Modal
          hoursData={modalProp}
          closeModal={closeModal}
          location={location}
        />
      )}
    </div>
  );
}

export default Container;
