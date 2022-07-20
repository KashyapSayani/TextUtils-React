import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`p-2 navbar navbar-expand-lg navbar-${props.mode==='light'?'dark':'light'} bg-${props.mode}`}>
      <Link className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} to="/">
          {props.title}
      </Link>

      <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/">Home</Link>
      
      <div className="container-fluid">
        
        <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/about">About</Link> 
      
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
          <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">
            Enable Dark Mode
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};