import React from "react";
import "./CafeForm.scss";

const CafeForm = ({
  handleCafeSubmit,
  handleCafeChange,
  handleCoordsSubmit,
  inputCafe,
}) => {
  return (
    <form onSubmit={handleCoordsSubmit}>
      <div className="flex-div">
        <div className="column">
          <label>Cafe name: </label>
          <input
            onChange={handleCafeChange}
            name="name"
            value={inputCafe.name}
            placeholder="Name of the cafe"
          />
        </div>
        <div className="column">
          <label>Address: </label>
          <input
            onChange={handleCafeChange}
            name="address"
            value={inputCafe.address}
            placeholder="ex: 1233 N Wells"
          />
        </div>
      </div>
      <div className="flex-div">
        <div className="column">
          <label>City: </label>
          <input
            onChange={handleCafeChange}
            name="city"
            value={inputCafe.city}
            placeholder="ex: Chicago"
          />
        </div>
        <div className="column">
          <label>State: </label>
          <input
            onChange={handleCafeChange}
            name="state"
            value={inputCafe.state}
            placeholder="ex: IL"
          />
        </div>
      </div>
      <div className="flex-div">
        <div className="column">
          <label>Postal Code: </label>
          <input
            onChange={handleCafeChange}
            name="postalcode"
            value={inputCafe.postalcode}
            placeholder="ex: 60610"
          />
        </div>
        <div className="column">
          <label>Country: </label>
          <input
            onChange={handleCafeChange}
            name="country"
            value={inputCafe.country}
            placeholder="ex: USA"
          />
        </div>
      </div>
      <button id='first-button'>Get Coordinates</button>
      <button onClick={() => handleCafeSubmit()}>Submit Cafe</button>
    </form>
  );
};

export default CafeForm;
