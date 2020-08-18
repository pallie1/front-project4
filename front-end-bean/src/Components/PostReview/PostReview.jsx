import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../App";
import Select from "react-select";
import PostForm from "../../Shared/PostForm/PostForm";
import apiUrl from "../../apiConfig";
import axios from "axios";
import "./PostReview.scss";

const PostReview = (props) => {
  const { activeUser } = useContext(DataContext);
  const [inputPost, setInputPost] = useState({
    img: "",
    rate: "",
    content: "",
  });
  const [allCafes, setAllCafes] = useState([]);
  const [chosenCafe, setChosenCafe] = useState({});

  useEffect(() => {
    const makeCafeAPICall = async () => {
      try {
        const res = await axios(`${apiUrl}/shops`);
        if (res.data.length > 0) {
          setAllCafes(res.data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    makeCafeAPICall();
  }, []);

  const mappedCafes = allCafes.map((cafe) => {
    return { value: cafe.id, label: cafe.name };
  });

  const handleChange = (event) => {
    setChosenCafe(event.value);
  };

  const handlePostChange = (event) => {
    setInputPost({ ...inputPost, [event.target.name]: event.target.value });
  };

  const postRevData = [];

  if (
    chosenCafe !== undefined &&
    activeUser !== undefined &&
    inputPost !== undefined
  ) {
    postRevData.push({
      user_id: activeUser.id,
      shop_id: chosenCafe,
      img: inputPost.img,
      rate: inputPost.rate,
      content: inputPost.content,
    });
  }

  const handlePostSubmit = (event) => {
    event.preventDefault();

    axios({
      url: `${apiUrl}/reviews`,
      method: "POST",
      data: postRevData[0],
    })
      .then(() => {
        props.history.push("/feed");
      })
      .catch(console.error);
  };

  if (activeUser !== undefined && allCafes.length > 0) {
    return (
      <>
        <div className="container">
          <h1>Where have you been?</h1>
          <Select
            className="smaller-width-select"
            options={mappedCafes}
            onChange={handleChange}
          />
          <div className="blurb-pr">
            <h3>Cafe not listed? Submit a new one!</h3>
            <Link className="button-class" to="/create-cafe">
              Add a Cafe
            </Link>
          </div>
        </div>

        <PostForm
          handlePostChange={handlePostChange}
          handlePostSubmit={handlePostSubmit}
          inputPost={inputPost}
        />
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

export default PostReview;
