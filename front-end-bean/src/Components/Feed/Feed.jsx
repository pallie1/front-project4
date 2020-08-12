import React, { useState, useEffect } from 'react';
import apiUrl from '../../apiConfig';
import axios from 'axios';

const Feed = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const allRevAPICall = async () =>{
            try {
                const res = await axios(`${apiUrl}/reviews`);
                setReviews(res.data);
            } catch (err) {
                console.error(err);
            }
        }

        allRevAPICall();
    },[])

    console.log('reviews - ', reviews)

    const mappedRevs = reviews.map( (review) => {
        return (
        <div key={review.id} >
            <img src={review.img} alt='user submited coffee shop picture' />
            <p>{review.rate}</p>
            <p>{review.content}</p>
        </div>
        )
    })

    return (
        <>
        <h1>Feed</h1>
        <div>{mappedRevs}</div>
        </>
    )
}

export default Feed;