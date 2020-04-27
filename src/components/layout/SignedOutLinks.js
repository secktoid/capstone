import React from "react";
import { NavLink } from "react-router-dom";
import App from "../../App";

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">HOME</NavLink>
      </li>
      <li>
        <NavLink to="/services">SERVICES</NavLink>
      </li>
      <li>
        <NavLink to="/gallery">GALLERY</NavLink>
      </li>
      <li>
        <NavLink to="/contact">CONTACT</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
