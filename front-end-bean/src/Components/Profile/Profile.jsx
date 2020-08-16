import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from "../../App";

const Profile = () => {
    const { activeUser } = useContext(DataContext);

    console.log('activeUSer on profil',  activeUser)

    if ( activeUser !== undefined) {
        let usersCafes = activeUser.shops.map(cafe => {
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
            <h1>{activeUser.username}</h1>
            <Link to='/edit-profile'>Edit Profile</Link>
            <div>
                <p>Your reviews: </p>
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
}


export default Profile;