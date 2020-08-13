import React, { useState, useContext } from 'react';
import UserForm from '../../Shared/UserForm/UserForm';
import { DataContext } from '../../App';
import axios from 'axios';

const Login = () => {
    const { activeUser, setActiveUser } = useContext(DataContext);
    const [input, setInput] = useState("");
    const [invalidEntry, setInvalidEntry] = useState("");

    return (
        <h1>Login</h1>
    )
}

export default Login;