import React from 'react';
import './LoginForm.scss';

const LoginForm = ({ handleChange, handleSubmit, input }) => {
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
                type='password'
            />
            <button>Submit</button>
        </form>
    )
}

export default LoginForm;