import React from "react";
import Day from "./Day";

function Days(props) {
  const { days, onClick } = props;
  return (
    <div className="Days">
      {days.map((day) => {
        return (
          <Day
            date={day.date}
            dayMeteo={day.day}
            hourMeteo={day.hour}
            key={day.date}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
}

export default Days;
