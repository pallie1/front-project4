import React, { useContext, useState } from 'react';
import { DataContext } from '../../App';
import { Link } from 'react-router-dom';
import UserForm from '../../Shared/UserForm/UserForm';
import apiUrl from '../../apiConfig';
import axios from 'axios';

const EditProfile = () => {
    const { activeUser, setActiveUser } = useContext(DataContext);
    const [input, setInput] = useState({username: activeUser.username, password: 'password'});

    if (activeUser) {
        const handleChange = (event) => {
            setInput({...input, [event.target.name]: event.target.value})
        }

        console.log("activeUser", activeUser)
    
        const handleSubmit = event => {
            event.preventDefault();
            axios({
                url: `${apiUrl}/users/${activeUser.id}`,
                method: 'PUT',
                data: input
            })
            
            .then(() => alert('Account updated!'))
            // .then((res) => {setActiveUser(res.data)})
            .then((res) => console.log('res!', res))
            .catch(console.error)
        }
                    
        console.log('input type', input)
    

    return (
        <>
        <h1>Edit your account!</h1>
        <UserForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            input={input}
            />
        <Link to='/profile'>Cancle</Link>
        </>
    )
    } else {
        return (<h1>nope</h1>)
    }
}

export default EditProfile;