import React, { useContext, useEffect, useState } from 'react';
import DataContext from '../../App';
import apiUrl from '../../apiConfig';
import axios from 'axios';


const SingleCafeRevs = (props) => {
    // const { activeUser } = useContext(DataContext);
    const [cafeFound, setCafeFound] = useState({});
    const pathname = props.location.pathname;
    const cafeID = pathname.slice(9, pathname.length);

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



    if (cafeFound.reviews !== undefined) {
        let usersArr = [];
        let helperObj = {};

        cafeFound.users.map(user => {
            helperObj.id = user.id;
            helperObj.username = user.username;
            usersArr.push(helperObj);
        })

        console.log('users Arr', usersArr)
        
        // if(usersArr !== undefined){
        const allRevs = cafeFound.reviews.map(cafe => {
            let usernameArr = [];
            // console.log('cafe in all Revs', cafe)
            for (let i=0; i<usersArr.length; i++) {
                if (cafe.user_id === usersArr[i].id) {
                    usernameArr.push(usersArr[i].username)
                }
            }
            console.log('usernameArr', usernameArr)
            return (
                <div className={'review-div'} key={cafe.id}>
                  <p>{usernameArr[0]}</p>
                  <p>{cafeFound.name}</p>
                  {cafe.img.length < 5 ? null : <img src={cafe.img} alt="user submited coffee shop" />}
                  <p>{cafe.rate}</p>
                  <p>{cafe.content}</p>
                </div>
                // <h1>JK</h1>
            )
        })
    
    

    return (
        <>
            <div>
                <h2>{cafeFound.name}</h2>
                <h3>{cafeFound.address}</h3>
                <h3>{cafeFound.city}, {cafeFound.state}</h3>
                <h3>{cafeFound.postalcode} {cafeFound.country}</h3>
            </div>
            <div>{allRevs}</div>
    <h1>reviews for a single cafe</h1>
    </>
    )
        // }
    } else {return <h1>Loading...</h1>}
}

export default SingleCafeRevs;