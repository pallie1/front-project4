import React from 'react';
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
            {/* <i class="fas fa-camera"></i> */}
         </div>

        </>
    )
}

export default Welcome;