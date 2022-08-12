import React, { useState } from "react";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   sendEmailVerification,
//   updateProfile,
// } from "firebase/auth";
// import initializeAuthentication from "../../Firebase/Firebase.init";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

// initializeAuthentication();

const SignUp = () => {
  const {
    handleEmailChange,
    handlePasswordChange,
    handlePasswordSignUp,
    handleNameChange,
    error,
  } = useAuth();

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  // const auth = getAuth();

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };

  const handleResgistration = (e) => {
    e.preventDefault();
    handlePasswordSignUp();
    // if (password.length < 6) {
    //   setError("Password must be at least 6 character long.");
    //   return;
    // }
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((result) => {
    //     // Signed in
    //     const user = result.user;
    //     sendEmailVerification(auth.currentUser).then(() => {
    //       // Email verification sent!
    //     });

    //     updateProfile(auth.currentUser, {
    //       displayName: name,
    //     }).then(() => {});
    //     console.log(user);
    //   })
    //   .catch((error) => {
    //     const errorMessage = error.message;
    //     setError(errorMessage);
    //   });
  };

  return (
    <div className="container w-50">
      <h1>Please Sign up</h1>
      <form onSubmit={handleResgistration}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            onBlur={handleNameChange}
            className="form-control"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            required
            onBlur={handleEmailChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            onBlur={handlePasswordChange}
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <div className="mb-3">{error}</div>

        <Link to="/sign-in" className="text-dark">
          Already User?
        </Link>
        <br />

        <button type="submit" className="btn btn-success mt-3">
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUp;
