import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../App";
import apiUrl from "../../apiConfig";
import axios from "axios";
import CafeForm from "../../Shared/CafeForm/CafeForm";
import './CreateCafe.scss';


const CreateCafe = (props) => {
  const { activeUser } = useContext(DataContext);
  const [coordsFound, setCoodsFound] = useState("");
  const [inputCafe, setInputCafe] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    postalcode: "",
    country: "",
  });

  const handleCafeChange = (event) => {
    setInputCafe({ ...inputCafe, [event.target.name]: event.target.value });
  };

  const handleCoordsSubmit = (event) => {
    event.preventDefault();
    const addressString = `${inputCafe.address
      .split(" ")
      .join("-")}-${inputCafe.city
      .split(" ")
      .join("-")}-${inputCafe.state
      .split(" ")
      .join("-")}-${inputCafe.postalcode
      .split(" ")
      .join("-")}-${inputCafe.country.split(" ").join("-")}`;

    axios(
      `https://api.mapbox.com/v4/geocode/mapbox.places/${addressString}.json?access_token=${process.env.REACT_APP_API_KEY}`
    ).then((res) => {
      console.log(
        "res.data.features[0].geometry.coordinates)",
        res.data.features[0].geometry.coordinates
      );
      setCoodsFound(res.data.features[0].geometry.coordinates);
    });
  };

  const handleCafeSubmit = () => {
  
    if (coordsFound !== undefined) {
      let stringCoords = "";
      stringCoords = `${coordsFound[0]} ${coordsFound[1]}`;
      inputCafe.coords = stringCoords;

      console.log("input cafe inside handleCafeSubmit", inputCafe);
      axios({
        url: `${apiUrl}/shops`,
        method: "POST",
        data: inputCafe,
      })
        .then(() => {
          props.history.push("/post-review");
        })
        .catch(console.error);
    }
  };

  if (activeUser !== undefined) {
    return (
      <div className='cc-div'>
        <h1>Submit a new cafe: </h1>
        <div className='blurb'>
          <h4>Want to put your cafe on the map?</h4>
          <h4>Click Get Coordinates before submitting</h4>
        </div>
        <CafeForm
          handleCafeChange={handleCafeChange}
          handleCoordsSubmit={handleCoordsSubmit}
          handleCafeSubmit={handleCafeSubmit}
          inputCafe={inputCafe}
        />
      </div>
    );
  } else {
    return (
      <>
        <h1>Log in please!</h1>
        <Link className='button-class' to="/login">Login</Link>
      </>
    );
  }
};

export default CreateCafe;
