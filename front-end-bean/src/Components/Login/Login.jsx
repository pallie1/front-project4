import React, { useState, useContext } from "react";
import { DataContext } from "../../App";
import { Redirect, Link } from "react-router-dom";
import LoginForm from "../../Shared/LoginForm/LoginForm";
import axios from "axios";
import apiUrl from "../../apiConfig";
import "./Login.scss";

const Login = () => {
  const { activeUser, setActiveUser } = useContext(DataContext);
  const [input, setInput] = useState({ username: "", password: "" });
  const [invalidEntry, setInvalidEntry] = useState("");

  const handleChange = (event) => {
    //   console.log('event from login', event)
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  //   console.log('input from login', input)
  //   console.log('diving deeper into input login', input.id)
  console.log(activeUser, "active User");

  const handleSubmit = (event) => {
    event.preventDefault();

    const getUser = async () => {
      try {
        const user = {
          user: {
            username: input.username,
            password: input.password,
          },
        };
        const res = await axios({
          url: `${apiUrl}/users/login`,
          method: "POST",
          data: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(res.data, "response from login");
        // console.log(res.data.username, 'username res login')

        if (res.data.status === 200) {
          console.log('res.data from login', JSON.parse(res.data.user))
          setActiveUser(JSON.parse(res.data.user));
          setInput("");
        } else {
          setInvalidEntry('Invalid Credentials');
          setInput("");
        }
      } catch (err) {
        console.error(err);
      }
    };
    getUser();
  };

  //   console.log('active use on login', activeUser)
  if (activeUser !== undefined) {
    return <Redirect to="/feed" />;
  }

  return (
    <div className='login-div'>
      <h1>Login</h1>
      <h3>{invalidEntry}</h3>
      <LoginForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        input={input}
      />
      <h3>Don't have an account yet?</h3>
      <Link className='button-class' to="/create-account">Create an Account</Link>
    </div>
  );
};

export default Login;

// import React, { useState, useContext } from "react";
// import { DataContext } from "../../App";
// import { Redirect, Link } from "react-router-dom";
// import LoginForm from "../LoginForm/LoginForm";
// import axios from "axios";
// import apiUrl from "../../apiConfig";
// import './Login.scss';

// const Login = () => {
//   const { activeUser, setActiveUser } = useContext(DataContext);
//   const [input, setInput] = useState({ username: "", id: "", password: "" });
// //   const [invalidEntry, setInvalidEntry] = useState("");

//   const handleChange = (event) => {
//     //   console.log('event from login', event)
//     setInput({ ...input, [event.target.name]: event.target.value });
//   };

// //   console.log('input from login', input)
// //   console.log('diving deeper into input login', input.id)

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const getUser = async () => {
//       try {
//         const res = await axios(`${apiUrl}/users/${input.id}`);
//         // console.log(res.data, "response from login");
//         // console.log(res.data.username, 'username res login')

//         if (res.data.username !== undefined) {
//           setActiveUser(res.data);
//           setInput("");
//         }
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     getUser();
//   };

// //   console.log('active use on login', activeUser)
//   if (activeUser !== undefined) {
//       return <Redirect to='/feed' />;
//   }

//   return (
//     <>
//       <h1>Login</h1>
//       <LoginForm
//         handleChange={handleChange}
//          handleSubmit={handleSubmit}
//          input={input}
//        />
//        <h2>Don't have an account yet?</h2>
//        <Link to='/create-account'>Create an Account</Link>
//     </>
//   );
// };

// export default Login;
