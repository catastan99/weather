import React from "react";
import Hour from "./Hour";

function Hours(props) {
  const { hoursData } = props;
  return (
    <div className="Hours">
      {hoursData.map((hourData) => {
        return (
          <Hour
            key={hourData.time}
            chanceOfRain={hourData.chance_of_rain}
            condition={hourData.condition}
            feelsLike={hourData.feelslike_c}
            humidity={hourData.humidity}
            precipMm={hourData.precip_mm}
            temp={hourData.temp_c}
            time={hourData.time}
            wind={hourData.wind_kph}
            windDirection={hourData.wind_dir}
          />
        );
      })}
    </div>
  );
}

export default Hours;
