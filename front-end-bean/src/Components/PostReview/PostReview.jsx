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
    const [input, setInput] = useState({img: "", rate: "", content: ""});
    // const [cafeSearchInput, setCafeSearchInput] = useState({name: ""});
    const [allCafes, setAllCafes] = useState([]);
    const [chosenCafe, setChosenCafe] = useState({});

    console.log('post review data context', activeUser)

    useEffect(() => {
        const makeCafeAPICall = async () => {
            try {
                const res = await axios(`${apiUrl}/shops`);
                console.log('res from get all cafes post rev', res.data)
                // if (res.data.length > 0) {
                    setAllCafes(res.data);
                // }
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
    

    const handleChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    // const handleCafeSearchChange = (event) => {
    //     setCafeSearchInput({ ...cafeSearchInput, [event.target.name]: event.target.value });
    // }

    // const handleCafeSearchSubmit = (event) => {
    //     event.preventDefault();
    // }
    console.log('cafe from click', chosenCafe)
    if (activeUser !== undefined && allCafes.length > 0 ) {
    return (
        <>

        <div className="container">
        {/* <div className="row"> */}
          {/* <div className="col-md-3"></div> */}
          {/* <div className="col-md-6"> */}
            <Select 
            options={mappedCafes}
            onSubmit={setChosenCafe()}
             />
          {/* </div> */}
          {/* <div className="col-md-4"></div> */}
        </div>
        <button>Submit Cafe</button>
      {/* </div> */}


        {/* <Select options={allCafes} /> */}
        <PostForm 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            input={input}
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