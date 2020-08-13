import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from "../../App";
import PostForm from '../../Shared/PostForm/PostFrom';
import apiUrl from '../../apiConfig';
import axios from 'axios';

const PostReview = () => {

    const { activeUser } = useContext(DataContext);
    const [input, setInput] = useState({img: "", rate: "", content: ""});
    const [cafeSearchInput, setCafeSearchInput] = useState({name: ""});
    const [allCafes, setAllCafes] = useState([]);
    const [cafe, setCafe] = useState({});

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

    const handleChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleCafeSearchChange = (event) => {
        setCafeSearchInput({ ...cafeSearchInput, [event.target.name]: event.target.value });
    }

    const handleCafeSearchSubmit = (event) => {
        event.preventDefault();
    }

    if (activeUser !== undefined) {
    return (

        <PostForm 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            input={input}
        />
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