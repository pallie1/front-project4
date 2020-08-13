import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.scss';

const Welcome = () => {
    return (
        <div id={'welcome-div'}>
         <img src='https://i.imgur.com/wzG4e8T.gif' alt='coffee cup logo' />
         <div className='welcome-name-tag'>
            <h1 className='welcome-bean'>bean</h1>
            <h3>cafe review app</h3>
            <Link to='/login'>Log in</Link>
            <Link to='/create-account'>Create an account</Link>
         </div>

        </div>
    )
}

export default Welcome;