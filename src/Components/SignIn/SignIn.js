import React from "react";

import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

// initializeAuthentication();

const SignIn = () => {
  const {
    handleEmailChange,
    handlePasswordChange,
    handlePasswordSignIn,
    error,
  } = useAuth();
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [error, setError] = useState("");

  //   const auth = getAuth();

  //   const handleEmailChange = (e) => {
  //     setEmail(e.target.value);
  //   };

  //   const handlePasswordChange = (e) => {
  //     setPassword(e.target.value);
  //   };

  const handleLogIn = (e) => {
    e.preventDefault();
    handlePasswordSignIn();
    // if (password.length < 6) {
    //   setError("Password must be at least 6 character long.");
    //   return;
    // }
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((result) => {
    //     // Signed in
    //     const user = result.user;
    //     console.log(user);
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorMessage = error.message;
    //     setError(errorMessage);
    //   });
  };

  return (
    <div className="container w-50">
      <h1>Please Log In</h1>
      <form onSubmit={handleLogIn}>
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

        <Link to="/sign-up" className="text-dark">
          New User?
        </Link>
        <br />
        <button type="submit" className="btn btn-success mt-3">
          SignIn
        </button>
      </form>
    </div>
  );
};

export default SignIn;
