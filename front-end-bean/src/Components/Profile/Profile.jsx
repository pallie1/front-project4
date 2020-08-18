import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from "../../App";
import './Profile.scss';

const Profile = () => {
    const { activeUser } = useContext(DataContext);

    console.log('activeUSer on profil',  activeUser)

    if ( activeUser !== undefined) {
        if (activeUser.reviews.length === 0) {
            return (
                <>  
                    <p>{activeUser.username}</p>
                    <Link className='button-class' to='/edit-profile'>Edit Profile</Link>
                    <h2>You don't have any reviews!</h2>
                    <h2>Add one now!</h2>
                    <Link className='button-class' to='/post-review'>Add review</Link>
                </>
            )
        } else {
        let cafeInfo = [];

        let usersRevs = activeUser.reviews.map(rev => {
            for (let i=0; i<activeUser.reviews.length; i++) {
            if (activeUser.shops[i].id === rev.shop_id) {
                cafeInfo.push(
                    activeUser.shops[i].name,
                    // activeUser.shops[i].address,
                    // activeUser.shops[i].city,
                    // activeUser.shops[i].state,
                    // activeUser.shops[i].postalcode,
                    // activeUser.shops[i].country,
                    activeUser.shops[i].id
                )
            }
        }
            return (
                <div key={rev.id} className='user-rev-div'>
                    <div>
                    <Link to={`/reviews/${cafeInfo[1]}`}><h3 className='name-feed'>{cafeInfo[0]}</h3></Link>
                        {/* <p>{cafeInfo[1]}</p>
                        <p>{cafeInfo[2], cafeInfo[3]}</p>
                        <p>{cafeInfo[4]}</p>
                        <p>{cafeInfo[5]}</p> */}
                    </div>
                    <div>
                       {rev.img.length < 5 ? null : <img src={rev.img} alt="user submited coffee shop" />}
                        <p>{rev.rate}</p>
                        <p>{rev.content}</p>
                    </div>
                </div>
            )
        })
    
        return (
            <div className='profile-div'>
                <div className='user-name'>
                    <h1>{activeUser.username}</h1>
                    <Link className='button-class' to='/edit-profile'>Edit Profile</Link>
                    <h4>Your reviews: </h4>
                </div>
            <div>
                {usersRevs}
            </div>
            </div>
        )
    } 
} else {
        return (
            <>
            <h1>Log in please!</h1> 
            <Link className='button-class' to='/login'>Login</Link>
            </>
        )
    }
}


export default Profile;