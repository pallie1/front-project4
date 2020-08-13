import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = ({ setHideChildren }) => {
  const [open, setOpen] = useState(false);

  return (
    <div id="header-nav">
      <nav id="mobile-nav">
        <div id="burger-menu">
          <div
            id="burger"
            onClick={() => {
              setOpen(!open);
              setHideChildren(!open);
            }}
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
          {/* </div> */}
          <ul id={open ? "open" : "closed-burger-menu-list"}>
            <li className="burger-menu-item">
              <Link
                to="/feed"
                onClick={() => {
                  setOpen(!open);
                  setHideChildren(!open);
                }}
              >
                Home/Feed
              </Link>
            </li>
            <li className="burger-menu-item">
              <Link
                to="/map"
                onClick={() => {
                  setOpen(!open);
                  setHideChildren(!open);
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
                  setHideChildren(!open);
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
                  setHideChildren(!open);
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
                  setHideChildren(!open);
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
};

export default Nav;
