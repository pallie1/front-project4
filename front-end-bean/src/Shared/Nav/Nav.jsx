import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = ({ setHideChildren }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={open ? "open-header-nav" : "closed-header-nav"}>
        <div>
            {open ? null : <Link to={'/map'}><i className="icon-color fa fa-map-marker fa-2x" aria-hidden="true"></i></Link>}
        </div>
      <nav id="mobile-nav">

        <div id="burger-menu">
          <div
            id="burger"
            onClick={() => {
              setOpen(!open);
              setHideChildren(!open);
            }}
          >
            {open ? <i className="fa fa-angle-down fa-3x" aria-hidden="true"></i> : <i className="icon-color fa fa-bars hamburger-hover fa-2x" aria-hidden="true"></i>}
          </div>
          <ul id={open ? "open" : "closed-burger-menu-list"}>
            <li className="burger-menu-item">
              <Link
                to="/feed"
                onClick={() => {
                  setOpen(!open);
                  setHideChildren(!open);
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
                  setHideChildren(!open);
                }}
              >
                Map
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
                to="/post-review"
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
      </nav>
    </div>
  );
};

export default Nav;
