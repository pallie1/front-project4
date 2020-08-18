import React from 'react';
import './UserForm.scss';

const UserForm = ({ handleChange, handleSubmit, input }) => {
    console.log(input, 'input')
    return (
        <form onSubmit={handleSubmit}>
            <label>Username: </label>
            <input 
                onChange={handleChange}
                name='username'
                value={input.username}
                placeholder='username'
            />
            <label>Password: </label>
            <input 
                onChange={handleChange}
                name='password'
                value={input.password}
                placeholder='password'
            />
            <button className='button-class button-spacer' >Submit</button>
        </form>
    )
}

export default UserForm;