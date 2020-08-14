import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { DataContext } from "../../App";
import apiUrl from "../../apiConfig";
import axios from "axios";
import CafeForm from "../../Shared/CafeForm/CafeForm";

const CreateCafe = (props) => {
  const { activeUser } = useContext(DataContext);
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

  const handleCafeSubmit = (event) => {
    event.preventDefault();

    axios({
      url: `${apiUrl}/shops`,
      method: "POST",
      data: inputCafe,
    })
      .then(() => {
        props.history.push("/post-review");
      })
      .catch(console.error);
  };

  if (activeUser !== undefined) {
      return (
          <CafeForm 
          handleCafeChange={handleCafeChange}
          handleCafeSubmit={handleCafeSubmit}
          inputCafe={inputCafe}
          />
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
