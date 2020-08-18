import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../../App";
import { Link } from "react-router-dom";
import apiUrl from "../../apiConfig";
import axios from "axios";
import "./Feed.scss";

const Feed = () => {
  const { activeUser } = useContext(DataContext);
  console.log('acitveUSer', activeUser)
  const [reviews, setReviews] = useState([]);

  console.log('active user zero', activeUser)
  console.log('active user', activeUser)

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
          {review.user_id === activeUser.id ? <Link className='name-feed' to={`/profile`}>{review.user.username}</Link> : <Link className='name-feed' to={`/profile/${review.user_id}`}>{review.user.username}</Link>}
          <Link className='name-feed coffe-name' to={`/reviews/${review.shop.id}`}><h3>{review.shop.name}</h3></Link>
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
      <div className='u-bean'>
        <Link to='/profile'>{activeUser.username}</Link>
        <h2><Link to='/post-review'>Where have you been?</Link></h2>
      </div>
      <h3>Where other users have been.</h3>
      <div>{mappedRevs}</div>
    </>
  );
  } else { 
    return (
      <>
      <h1>Log in please!</h1> 
      <Link className='button-class' to='/login'>Login</Link>
      </>
      )
  }
};

export default Feed;
