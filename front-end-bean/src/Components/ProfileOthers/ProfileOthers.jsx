import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from "../../App";
import axios from 'axios';
import apiUrl from '../../apiConfig';

const ProfileOthers = (props) => {
    const { activeUser } = useContext(DataContext);
    const [clickedUser, setClickedUser] = useState({});

    const pathname = props.location.pathname;
    const userID = pathname.slice(9, pathname.length)

    // console.log('activeUSer on profil',  userID)

    console.log('clicked user', clickedUser)

        useEffect(() => {
            const makeAPICall = async () => {
                try {
                    const res = await axios(`${apiUrl}/users/${userID}`);
                    console.log('res', res)
                    setClickedUser(res.data)
                    // if (res.data.length > 0) {
                    //     setClickedUser(res.data)
                    //     console.log('res.data from others', res.data)
                    // }
                } catch (err) {
                    console.error(err)
                }

            }
            makeAPICall();
        },[])
   

        if ( activeUser !== undefined && clickedUser.shops !== undefined) {    
        let usersCafes = clickedUser.shops.map(cafe => {
            return (
                <div key={cafe.id}>
                    <h3>{cafe.name}</h3>
                    <h4>{cafe.address}</h4>
                    <h4>{cafe.city}, {cafe.state}</h4>
                    <h4>{cafe.postalcode}</h4>
                    <h4>{cafe.country}</h4>
                </div>
            )
        })
    
        return (
            <>
            <h1>{clickedUser.username}'s reviews!</h1>
            <div>
                {usersCafes}
            </div>
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
    // return(
    //     <h1>Ok</h1>
    // )
}


export default ProfileOthers;