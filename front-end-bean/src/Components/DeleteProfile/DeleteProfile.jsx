import React, { useContext, useState } from "react";
import { DataContext } from "../../App";
import { Link, Redirect } from "react-router-dom";
import apiUrl from "../../apiConfig";
import axios from "axios";

const DeleteProfile = () => {
  const { activeUser } = useContext(DataContext);
  const [isDeleted, setIsDeleted] = useState(false);

  if (activeUser) {
  const destroy = () => {
    axios({
      url: `${apiUrl}/users/${activeUser.id}`,
      method: "DELETE",
    })
      .then(setIsDeleted(true))
      .catch((err) => console.error(err));
  };

  if (isDeleted) {
    alert('Profile and reviews have been deleted!')
    return (
        <Redirect to="/" />
    )
  }

  return (
    <>
      <h1>Are you sure you want to delete your account and all reviews?</h1>
      <h1>This will be permanent.</h1>
      <button onClick={destroy}>Delete Profile</button>
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

export default DeleteProfile;
