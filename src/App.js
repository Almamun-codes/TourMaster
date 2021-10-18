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

function App() {
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
            <SignIn></SignIn>
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
