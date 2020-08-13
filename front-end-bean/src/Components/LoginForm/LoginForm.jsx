import React from 'react';

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
            <label>ID: </label>
            <input 
                onChange={handleChange}
                name='id'
                value={input.id}
                placeholder='id'
            />
            <label>Password: </label>
            <input 
                onChange={handleChange}
                name='password'
                value={input.password}
                placeholder='password'
            />
            <button>Submit</button>
        </form>
    )
}

export default LoginForm;