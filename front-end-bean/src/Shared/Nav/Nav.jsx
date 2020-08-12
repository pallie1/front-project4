import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = ({ setHideProps, hideProps }) => {
  const [open, setOpen] = useState(false);

  return (
    <div id="headerNav">
      <nav id="deskNav">
        <div id="burger-menu">
          <div id="burger">
            <h1 className="layout-h1">bean</h1>
            <div
              id="burger-span"
              onClick={() => {
                setOpen(!open);
                // setHideProps(!open);
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <ul id={open ? "open" : "closed-burger-menu-list"}>
            <li className="burger-menu-item">
              <Link
                to="/"
                onClick={() => {
                  setOpen(!open);
                //   setHideProps(!open);
                }}
              >
                Home
              </Link>
            </li>
            <li className="burger-menu-item">
              <Link
                to="/map"
                onClick={() => {
                  setOpen(!open);
                //   setHideProps(!open);
                }}
              >
                Map
              </Link>
            </li>
            <li className="burger-menu-item">
              <Link
                to="/favorites"
                onClick={() => {
                  setOpen(!open);
                //   setHideProps(!open);
                }}
              >
                Favorites
              </Link>
            </li>
            <li className="burger-menu-item">
              <Link
                to="/profile"
                onClick={() => {
                  setOpen(!open);
                //   setHideProps(!open);
                }}
              >
                Profile
              </Link>
            </li>
            <li className="burger-menu-item">
              <Link
                to="/postreview"
                onClick={() => {
                  setOpen(!open);
                //   setHideProps(!open);
                }}
              >
                Post a Review
              </Link>
            </li>
          </ul>
        </div>
        {/* <div id="desk-menu">
          <h1 className="layout-h1">Forte</h1>
          <ul id="desk-ul">
            <li>
              <Link
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/meetTheTeam"
              >
                Meet the Team
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                to="/login"
              >
                Login
              </Link>
            </li>
          </ul>
        </div> */}
      </nav>
    </div>
  );
}

export default Nav;