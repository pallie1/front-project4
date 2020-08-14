import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from "../../App";
import Select from 'react-select';
import PostForm from '../../Shared/PostForm/PostFrom';
import apiUrl from '../../apiConfig';
import axios from 'axios';
import './PostReview.scss';

const PostReview = () => {

    const { activeUser } = useContext(DataContext);
    const [inputPost, setInputPost] = useState({img: "", rate: "", content: ""});
    const [allCafes, setAllCafes] = useState([]);
    const [chosenCafe, setChosenCafe] = useState({});

    console.log('post review data context', activeUser)

    useEffect(() => {
        const makeCafeAPICall = async () => {
            try {
                const res = await axios(`${apiUrl}/shops`);
                console.log('res from get all cafes post rev', res.data)
                if (res.data.length > 0) {
                    setAllCafes(res.data);
                }
            } catch (err) {
                console.error(err);
            }
        }
        makeCafeAPICall();
    },[])

    // console.log('allcafes', allCafes)
    const mappedCafes = [];

    allCafes.map((cafe) => {
        mappedCafes.push({value: cafe.id, label: cafe.name})
    })
    console.log(mappedCafes, 'mappedCafes')
    

    const handlePostChange = (event) => {
        // setInputPost({ ...inputPost, [event.target.name]: event.target.value });
    }

    const handlePostSubmit = (event) => {
        event.preventDefault();
    }


    const handleChange = (event) => {
        console.log('event from select', event)
        setChosenCafe(event.value)
    }
    console.log('chosen cafe', chosenCafe)

    console.log('cafe from click', chosenCafe)
    if (activeUser !== undefined && allCafes.length > 0 ) {
    return (
        <>

        <div className="container">
            <Select 
            options={mappedCafes}
            onChange={handleChange}
             />
        </div>

        <PostForm 
            handlePostChange={handlePostChange}
            handlePostSubmit={handlePostSubmit}
            inputPost={inputPost}
        />
        </>
    )
    } else {
        return (
            <>
                <h1>Log in please!</h1>
                <Link to='/login'>Login</Link>
            </>
        )
    }
}

export default PostReview;