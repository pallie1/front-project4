import React, { useContext, useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { DataContext } from "../../App";
import axios from 'axios';
import apiUrl from '../../apiConfig';
import '../Profile/Profile.scss';

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
   

        if ( activeUser !== undefined && clickedUser.reviews !== undefined) {    
            // let cafeInfo = [];
        let usersRevs = clickedUser.reviews.map(rev => {
            for (let i=0; i<clickedUser.reviews.length; i++) {
                if (clickedUser.shops[i].id === rev.shop_id) {
                    // cafeInfo.push(
                    //     clickedUser.shops[i].name
                    //     )


            // console.log('cafeInfo', cafeInfo)
           
            return (
                <div key={rev.id} className='user-rev-div' >
                    <div>
                        <Link to={`/reviews/${rev.shop_id}`}><h3 className='name-feed'>{clickedUser.shops[i].name}</h3></Link>
                    </div>
                    <div>
                        {rev.img.length < 5 ? null : <img src={rev.img} alt="user submited coffee shop" />}
                        <p>{rev.rate}</p>
                        <p>{rev.content}</p>
                    </div>
                </div>
            )
        }
    }
        })
    
        return (
            <>
            <h1>{clickedUser.username}'s reviews:</h1>
            <div>
                {usersRevs}
            </div>
            </>
        )
        
    } 
    else {
        return (
            <>
                <h1>Log in please!</h1> 
                <Link className='button-class' to='/login'>Login</Link>
            </>
        )
    }

}


export default ProfileOthers;