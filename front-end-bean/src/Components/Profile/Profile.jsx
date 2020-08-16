import React, { useContext, useEffect } from 'react';
import { DataContext } from '../../App';
import axios from 'axios';
import apiUrl from '../../apiConfig';

const Profile = () => {
    const { activeUser } = useContext(DataContext);

    console.log('activeUSer on profil',  activeUser)
    
    useEffect(() => {
    //     const makeReviewsCall = async () => {
    //         const res = await axios (`${apiUrl}/reviews`)
    

    if (activeUser) {

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
}, [])

return (
    <h1>Loading...</h1>
)
}

export default Profile;