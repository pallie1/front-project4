import React, { useContext, useState } from "react";
import { DataContext } from "../../App";
import { Link, Redirect } from "react-router-dom";
import apiUrl from "../../apiConfig";
import axios from "axios";

const DeleteProfile = () => {
  const { activeUser } = useContext(DataContext);
  const [isDeleted, setIsDeleted] = useState(false);

  if (activeUser) {

  const destroy = async () => {
    try {
      const user = {
        user: {
          username: activeUser.username,
          password: activeUser.password,
        },
      };
      const res = await axios({
        url: `${apiUrl}/users//${activeUser.id}`,
        method: 'DELETE',
        data: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setIsDeleted(true)
    } catch (err) {
      console.error(err);
    }
  };

  if (isDeleted) {
    alert('Profile and reviews have been deleted!')
    return (
        <Redirect to="/" />
    )
  }

  return (
    <>
      <h2>Are you sure you want to delete your account and all reviews?</h2>
      <h2>This will be permanent.</h2>
      <button className='button-cacle button-spacer' onClick={destroy}>Delete Profile</button>
      <Link className='button-cacle button-spacer' to="/profile">Go Back</Link>
    </>
  );
  } else {
    return (
        <>
        <h1>Log in please!</h1> 
        <Link className='button-class'to='/login'>Login</Link>
        </>
        )
  }
};

export default DeleteProfile;












// import React, { useContext, useState } from "react";
// import { DataContext } from "../../App";
// import { Link, Redirect } from "react-router-dom";
// import apiUrl from "../../apiConfig";
// import axios from "axios";

// const DeleteProfile = () => {
//   const { activeUser } = useContext(DataContext);
//   const [isDeleted, setIsDeleted] = useState(false);

//   if (activeUser) {
//   const destroy = () => {
//     axios({
//       url: `${apiUrl}/users/${activeUser.id}`,
//       method: "DELETE",
//     })
//       .then(setIsDeleted(true))
//       .catch((err) => console.error(err));
//   };

//   if (isDeleted) {
//     alert('Profile and reviews have been deleted!')
//     return (
//         <Redirect to="/" />
//     )
//   }

//   return (
//     <>
//       <h2>Are you sure you want to delete your account and all reviews?</h2>
//       <h2>This will be permanent.</h2>
//       <button className='button-cacle button-spacer' onClick={destroy}>Delete Profile</button>
//       <Link className='button-cacle button-spacer' to="/profile">Go Back</Link>
//     </>
//   );
//   } else {
//     return (
//         <>
//         <h1>Log in please!</h1> 
//         <Link className='button-class'to='/login'>Login</Link>
//         </>
//         )
//   }
// };

// export default DeleteProfile;

