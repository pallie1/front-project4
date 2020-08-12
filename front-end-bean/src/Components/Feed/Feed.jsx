import React, { useState, useEffect } from "react";
import apiUrl from "../../apiConfig";
import axios from "axios";
import "./Feed.scss";

const Feed = () => {
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
          <img src={review.img} alt="user submited coffee shop picture" />
          <p>{review.rate}</p>
          <p>{review.content}</p>
        </div>
      );
    } else { return <h1>Loading...</h1>}
  });

  return (
    <>
      <h1>Where have other users have been.</h1>
      <div>{mappedRevs}</div>
    </>
  );
};

export default Feed;
