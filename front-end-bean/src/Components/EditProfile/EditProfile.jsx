import React, { useContext, useState } from "react";
import { DataContext } from "../../App";
import { Link } from "react-router-dom";
import UserForm from "../../Shared/UserForm/UserForm";
import apiUrl from "../../apiConfig";
import axios from "axios";
import "./EditProfile.scss";

const EditProfile = (props) => {
  const { activeUser, setActiveUser } = useContext(DataContext);
  const [isUserNew, isSetNewUser] = useState(false);
  const [input, setInput] = useState({
    username: activeUser.username,
    password: "password",
  });

  if (activeUser) {
    const handleChange = (event) => {
      setInput({ ...input, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      const user = {
        user: {
          username: input.username,
          password: input.password,
        },
      };
      axios({
        url: `${apiUrl}/users/${activeUser.id}`,
        method: "PUT",
        data: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => isSetNewUser(true))
        .then(() => alert("Account updated!"));
    };

    if (isUserNew) {
      axios(`${apiUrl}/users/${activeUser.id}`)
        .then((res) => {
          setActiveUser(res.data);
        })
        .then(() => isSetNewUser(false))
        .then(() => props.history.push("/profile"))

        .catch((err) => console.error(err));
    }

    return (
      <>
        <h1>Edit your account!</h1>
        <UserForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          input={input}
        />
        <Link className="button-cacle button-spacer" to="/delete-profile">
          Delete Profile
        </Link>
        <Link className="button-cacle button-spacer" to="/profile">
          Go Back
        </Link>
      </>
    );
  } else {
    return (
      <>
        <h1>Log in please!</h1>
        <Link className="button-class" to="/login">
          Login
        </Link>
      </>
    );
  }
};

export default EditProfile;
