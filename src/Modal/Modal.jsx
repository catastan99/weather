import React from "react";
import Hours from "../Hours/Hours";

function Modal(props) {
  console.log(props);
  const { closeModal, hoursData, location } = props;
  const date =
    hoursData[0].time.slice(8, 10) + "." + hoursData[0].time.slice(5, 7);
  return (
    <div className="Modal">
      <button className="btn" onClick={closeModal}>
        &larr;
      </button>
      <div className="location">
        <p className="city">{location.name}</p>
        <p className="separator">,&nbsp; </p>
        <p className="country">{location.country}</p>
      </div>
      <div className="time">{date}</div>
      <Hours hoursData={hoursData} />
    </div>
  );
}

export default Modal;
