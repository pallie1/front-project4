import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../App";
import apiUrl from "../../apiConfig";
import axios from "axios";
import "../Feed/Feed.scss";

const SingleCafeRevs = (props) => {
  const { activeUser } = useContext(DataContext);
  const [cafeFound, setCafeFound] = useState({});
  const pathname = props.location.pathname;
  const cafeID = pathname.slice(9, pathname.length);

  useEffect(() => {
    const makeCafeAPICall = async () => {
      try {
        const res = await axios(`${apiUrl}/shops/${cafeID}`);
        setCafeFound(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    makeCafeAPICall();
  }, []);

  let usersArr = [];
  let helperObj = {};
  if (cafeFound.users !== undefined) {
    cafeFound.users.map((user) => {
      helperObj.id = user.id;
      helperObj.username = user.username;
      usersArr.push(helperObj);
    });
  }

  if (usersArr !== undefined && cafeFound.reviews !== undefined) {
    const allRevs = cafeFound.reviews.map((cafe) => {
      for (let i = 0; i < usersArr.length; i++) {
        if (cafe.user_id === usersArr[i].id) {
          return (
            <div
              className={"review-div"}
              key={Math.floor(Math.random() * Math.floor(7))}
            >
              {activeUser.id === usersArr[i].id ? (
                <Link className="name-feed" to={`/profile/`}>
                  {usersArr[i].username}
                </Link>
              ) : (
                <Link to={`/profile/${usersArr[i].id}`}>
                  {usersArr[i].username}
                </Link>
              )}
              <p>{cafeFound.name}</p>
              {cafe.img.length < 5 ? null : (
                <img src={cafe.img} alt="user submited coffee shop" />
              )}
              <p>{cafe.rate}</p>
              <p>{cafe.content}</p>
            </div>
          );
        }
      }
    });

    return (
      <>
        <div>
          <h2>{cafeFound.name}</h2>
          <h3>{cafeFound.address}</h3>
          <h3>
            {cafeFound.city}, {cafeFound.state}
          </h3>
          <h3>
            {cafeFound.postalcode} {cafeFound.country}
          </h3>
          <Link className="button-class" to="/post-review">
            Add Review
          </Link>
        </div>
        <div>{allRevs}</div>
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

export default SingleCafeRevs;
