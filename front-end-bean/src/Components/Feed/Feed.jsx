import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../../App";
import { Link } from "react-router-dom";
import apiUrl from "../../apiConfig";
import axios from "axios";
import "./Feed.scss";

const Feed = () => {
  const { activeUser } = useContext(DataContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const allRevAPICall = async () => {
      try {
        const res = await axios(`${apiUrl}/reviews`);
        setReviews(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    allRevAPICall();
  }, []);

  console.log("reviews - ", reviews);

  const mappedRevs = reviews.map((review) => {
    console.log("user inside review single- ", review.user.username);

    if (review.user.length !== null) {
      return (
        <div className={'review-div'} key={review.id}>
          <p>{review.user.username}</p>
          {review.img.length < 5 ? null : <img src={review.img} alt="user submited coffee shop" />}
          <p>{review.rate}</p>
          <p>{review.content}</p>
        </div>
      );
    } else { return <h1>Loading...</h1>}
  });

  if (activeUser !== undefined) {
  return (
    <>
      <div>
      <p>{activeUser.username}</p>
      <h2><Link to='/post-review'>Where have you been?</Link></h2>
      </div>
      <h1>Where have other users have been.</h1>
      <div>{mappedRevs}</div>
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

export default Feed;
