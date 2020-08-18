import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.scss";

const Welcome = () => {
  return (
    <div id={"welcome-div"}>
      <img src="https://i.imgur.com/YJb5wCy.gif" alt="coffee cup logo" />
      <div className="welcome-name-tag">
        <h1 className="welcome-bean">bean local</h1>
        <h3>cafe review app</h3>
        <div className="buttons-div">
          <Link className="button-class" to="/login">
            Log in
          </Link>
          <Link className="button-class" to="/create-account">
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
