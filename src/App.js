import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import AllPlaces from "./Components/AllPlaces/AllPlaces";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import SelectedSpots from "./Components/SelectedSpots/SelectedSpots";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import initializeAuthentication from "./Firebase/Firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { useState } from "react";

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

function App() {
  const [user, setUser] = useState({});

  const handleGitHubSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, gitHubProvider).then((result) => {
      console.log(result.user);
      const { displayName, photoURL } = result.user;
      const loggedInUser = {
        name: displayName,
        img: photoURL,
      };
      setUser(loggedInUser);
    });
  };

  const handleGoogleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, googleProvider).then((result) => {
      const { displayName, photoURL } = result.user;
      const loggedInUser = {
        name: displayName,
        img: photoURL,
      };
      setUser(loggedInUser);
    });
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/tourist-places">
            <AllPlaces></AllPlaces>
          </Route>

          <Route path="/favourites">
            <SelectedSpots></SelectedSpots>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/sign-in">
            <SignIn
              signInbtn={handleGoogleSignIn}
              githubsignin={handleGitHubSignIn}
              user={user}
            ></SignIn>
          </Route>

          <Route path="/sign-up">
            <SignUp></SignUp>
          </Route>

          <Route to="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
