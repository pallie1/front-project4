import React, { useContext, useEffect, useState } from 'react';
// import { DataContext } from '../../App';
import { DataContext } from "../../App";
import axios from 'axios';
import apiUrl from '../../apiConfig';

const Profile = () => {
    const { activeUser } = useContext(DataContext);
    const [userFound, setUserFound] = useState({});
    const pathname = props.location.pathname;
    const userID = pathname.slice(9, pathname.length);
    

    // console.log('activeUSer on profil',  activeUser)

    
    useEffect(() => {
        const makeUserAPICall = async () => {
        try {
            const res = await axios(`${apiUrl}/users/${userID}`);
            setUserFound(res.data);
        } catch (err) {
            console.error(err);
        }
    }

    makeUserAPICall();
       
    }, [])



    // if ( activeUser) {
    if (idUser) {
        // <h1>yess</h1>
        let usersCafes = activeUser.shops.map(cafe => {
            return (
                <div key={cafe.id}>
                    <h3>{cafe.name}</h3>
                    <h4>{cafe.address}</h4>
                    <h4>{cafe.city}</h4>
                    <h4>{cafe.state}</h4>
                    <h4>{cafe.postalcode}</h4>
                    <h4>{cafe.country}</h4>
                </div>
            )
        })
    

        return (
            <>
            <h1>{activeUser.username}</h1>
            <div>
                <p>Your reviews: </p>
                {usersCafes}
            </div>
            </>
        )
    } else {
        return <h1>not yet hunty</h1>
    }



// return (
//     <h1>Loading...</h1>
// )
}


export default Profile;