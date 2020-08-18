import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../App';
import apiUrl from '../../apiConfig';
import axios from 'axios';
import '../Feed/Feed.scss';


const SingleCafeRevs = (props) => {
    const { activeUser } = useContext(DataContext);
    const [cafeFound, setCafeFound] = useState({});
    const pathname = props.location.pathname;
    const cafeID = pathname.slice(9, pathname.length);
    console.log('cafeID', cafeID)

    useEffect( () => {
        const makeCafeAPICall = async () => {
            try {
                const res = await axios(`${apiUrl}/shops/${cafeID}`);
                setCafeFound(res.data);
            } catch (err) {
                console.error(err);
            }
        }

        makeCafeAPICall();
    },[])

    console.log('cafeFound', cafeFound)



  
        
        let usersArr = [];
        let helperObj = {};
        if (cafeFound.users !== undefined) {
        cafeFound.users.map(user => {
            helperObj.id = user.id;
            helperObj.username = user.username;
            usersArr.push(helperObj);
        })
    }
        console.log('users Arr', usersArr)

  
        if(usersArr !== undefined && cafeFound.reviews !== undefined){
        const allRevs = cafeFound.reviews.map(cafe => {
            let usernameArr = [];
            // console.log('cafe in all Revs', cafe)
            for (let i=0; i<usersArr.length; i++) {
                if (cafe.user_id === usersArr[i].id) {
                    usernameArr.push(usersArr[i].username)
                    usernameArr.push(usersArr[i].id)
                }
            }
            console.log('usernameArr', usernameArr)
            return (
                <div className={'review-div'} key={Math.floor(Math.random() * Math.floor(7))}>
                  {activeUser.id === usernameArr[1] ? <Link className='name-feed' to={`/profile/`}>{usernameArr[0]}</Link> : <Link to={`/profile/${usernameArr[1]}`}>{usernameArr[0]}</Link>}
                  <p>{cafeFound.name}</p>
                  {cafe.img.length < 5 ? null : <img src={cafe.img} alt="user submited coffee shop" />}
                  <p>{cafe.rate}</p>
                  <p>{cafe.content}</p>
                </div>
            )
        })
    
    
    return (
        <>

            <div>
                <h2>{cafeFound.name}</h2>
                <h3>{cafeFound.address}</h3>
                <h3>{cafeFound.city}, {cafeFound.state}</h3>
                <h3>{cafeFound.postalcode} {cafeFound.country}</h3>
                <Link className='button-class' to='/post-review'>Add Review</Link>
            </div>
            <div>{allRevs}</div>
    </>
    )
    
} else {
        return (
            <>
                <h1>Log in please!</h1> 
                <Link className='button-class' to='/login'>Login</Link>
            </>
        )
    }
}

export default SingleCafeRevs;