import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { DataContext } from "../../App";
import apiUrl from "../../apiConfig";
import axios from "axios";
import CafeForm from "../../Shared/CafeForm/CafeForm";

const CreateCafe = (props) => {
  const { activeUser } = useContext(DataContext);
  const [coords, setCoods] = useState([]);
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
  const addressString = `${inputCafe.address.split(" ").join('-')}-${inputCafe.city.split(" ").join('-')}-${inputCafe.state.split(" ").join('-')}-${inputCafe.postalcode.split(" ").join('-')}-${inputCafe.country.split(" ").join('-')}`;

  // `${cafe.address.split(" ").join('-')}-${cafe.city.split(" ").join('-')}-${cafe.state.split(" ").join('-')}-${cafe.country.split(" ").join('-')}`;
  axios(`https://api.mapbox.com/v4/geocode/mapbox.places/${addressString}.json?access_token=${process.env.REACT_APP_API_KEY}`)
  .then(res => {
    console.log('res.data.features[0].geometry.coordinates)',res.data.features[0].geometry.coordinates)
    setCoods(res.data.features[0].geometry.coordinates)
  })
}

  const handleCafeSubmit = (event) => {
    event.preventDefault();

    axios({
      url: `${apiUrl}/shops`,
      method: "POST",
      data: inputCafe,
    })
      // .then(() => {
      //   props.history.push("/post-review");
      // })
      .catch(console.error);
  };

console.log('hopefully coreds - ', coords)

  if (activeUser !== undefined) {
      return (
        <>
          <CafeForm 
          handleCafeChange={handleCafeChange}
          handleCoordsSubmit={handleCoordsSubmit}
          // handleCafeSubmit={handleCafeSubmit}
          inputCafe={inputCafe}
          />
          <button onClick={() => handleCafeSubmit}>Submit Cafe!</button>
          </>
      )
  } else {
      return (
        <>
        <h1>Log in please!</h1>
        <Link to='/login'>Login</Link>
    </>
      )
  }
};

export default CreateCafe;
