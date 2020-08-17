import React, { useContext, useState } from "react";
import { DataContext } from "../../App";
import { Link } from "react-router-dom";
import UserForm from "../../Shared/UserForm/UserForm";
import apiUrl from "../../apiConfig";
import axios from "axios";
// import './EditProfile.scss';

const EditProfile = () => {
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

    console.log("activeUser", activeUser);

    const handleSubmit = (event) => {
      event.preventDefault();
      axios({
        url: `${apiUrl}/users/${activeUser.id}`,
        method: "PUT",
        data: input,
      })
        .then(() => alert("Account updated!"))
        .then(() => isSetNewUser(true))
        .catch(console.error);
      // .then(axios(`${apiUrl}/users/${activeUser.id}`)
    };

    console.log("input type", input);

    if (isUserNew) {
      axios(`${apiUrl}/users/${activeUser.id}`)
        .then((res) => {
          setActiveUser(res.data);
          // console.log('res from get call', res)
        })

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
        <Link to="/delete-profile">Delete Profile</Link>
        <Link to="/profile">Go Back</Link>
      </>
    );
  } else {
    return (
        <>
        <h1>Log in please!</h1> 
        <Link to='/login'>Login</Link>
        </>
        )
  }
};

export default EditProfile;
