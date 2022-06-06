import React, { useState } from "react";

function Search(props) {
  const [enteredLocation, setEnteredLocation] = useState("");

  const inputHandler = (e) => {
    setEnteredLocation(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.getData(enteredLocation);
    setEnteredLocation("");
  };

  const keyDownHandler = (e) => {
    e.key === "Enter" && props.getData(enteredLocation);
    e.key === "Enter" && setEnteredLocation("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Location"
        className="location-input"
        value={enteredLocation}
        onChange={inputHandler}
        onKeyDown={keyDownHandler}
      />
      <input
        type="submit"
        value="Search"
        className="submit-btn"
        onClick={onSubmitHandler}
      />
    </>
  );
}

export default Search;
