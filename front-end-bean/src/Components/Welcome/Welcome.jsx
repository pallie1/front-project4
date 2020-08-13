import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.scss';

const Welcome = () => {
    return (
        <>
        <p></p>
         <img src='https://i.imgur.com/wzG4e8T.gif' alt='coffee cup logo' />
         <div className='welcome-name-tag'>
            <h1 className='welcome-bean'>bean</h1>
            <h3>cafe review app</h3>
            <button>Log in</button>
            <Link to='/create-account'>Create an account</Link>
         </div>

        </>
    )
}

export default Welcome;