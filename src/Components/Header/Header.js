import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../logo.png";
import { getFromDb } from "../LocalStorage/LocalStorage";
import "./Header.css";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
  const [items, setItems] = useState(0);

  const { user } = useAuth();
  console.log(user);

  const setbadges = () => {
    const storedItems = getFromDb();

    let totalItems = 0;
    for (const i in storedItems) {
      totalItems++;
    }
    return totalItems;
  };

  const totalItems = setbadges();

  useEffect(() => {
    setItems(totalItems);
  }, [totalItems]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <NavLink className="navbar-brand d-flex" to="/home">
            <img src={logo} alt="logo" />
            <h1>Tour Manager</h1>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/tourist-places">
                  All Places
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link position-relative"
                  to="/favourites"
                >
                  Favourites
                  <span className="position-absolute top-75 start-75 translate-middle badge rounded-pill bg-danger">
                    {items}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
            <form className="d-flex w-50">
              <input
                className="form-control ms-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button
                className="btn btn-light ms-2 btn-outline-success"
                type="submit"
              >
                Search
              </button>
            </form>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/sign-in">
                  Sign In
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/sign-up">
                  Sign Up
                </NavLink>
              </li>
              <li>{user.displayName}</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
