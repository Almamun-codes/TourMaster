import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "@firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState({});

  const auth = getAuth();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordSignIn = () => {
    if (password.length < 6) {
      setError("Password must be at least 6 character long.");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        setUser(user);
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handlePasswordSignUp = () => {
    if (password.length < 6) {
      setError("Password must be at least 6 character long.");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        // Signed in
        //   sendEmailVerification(auth.currentUser).then(() => {
        //     // Email verification sent!
        //   });

        updateProfile(auth.currentUser, {
          displayName: name,
        }).then(() => {
          setUser(user);
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return {
    user,
    error,
    handleEmailChange,
    handlePasswordChange,
    handlePasswordSignIn,
    handlePasswordSignUp,
    handleNameChange,
  };
};

export default useFirebase;
