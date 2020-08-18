import React, { useState } from 'react';
import UserForm from '../../Shared/UserForm/UserForm';
import { Link } from 'react-router-dom';
import apiUrl from '../../apiConfig';
import axios from 'axios';
import './CreateAccount.scss';

const CreateAccount = (props) => {
    const [input, setInput] = useState({username: "", password: ""});

    console.log('input from ca', input)

    const handleChange = (event) => {
        setInput({...input, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault();
        const user = {
            user: {
              username: input.username,
              password: input.password,
            },
          };
        axios({
            url: `${apiUrl}/users`,
            method: 'POST',
            data: JSON.stringify(user),
            // headers: {
            //     "Content-Type": "application/json",
            //   },
              headers: {
                'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
              }
        })
        .then(() => {
            props.history.push('/login');
        })
        .catch(console.error)
    }
                
    console.log('input type', input)


    return (
        <div className='create-acct-div'>
        <h1>Create an account!</h1>
        <UserForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            input={input}
            />
        <Link id='button-ca' to='/'>Cancle</Link>
        </div>
    )
}

export default CreateAccount;