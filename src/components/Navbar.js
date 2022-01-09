import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        */}
        <div className="justify-content-end" id="navbarNav">
          {/* <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" to="/about">
                {props.aboutText}
              </a>
            </li> }
          </ul> */}
          <div
            className={`custom-control custom-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              onClick={props.toggleMode}
              type="checkbox"
              className="custom-control-input"
              id="customSwitches"
            />
            <label className="custom-control-label" htmlFor="customSwitches">
              Dark Mode
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}

// gives error if other type is given as input
// sets types for properties
Navbar.prototype = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Title",
  aboutText: "About",
};
