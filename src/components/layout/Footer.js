import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="" style={{ width: "100%" }}>
      <footer className="page-footer grey darken-3" style={{ width: "100%" }}>
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">HIGHLIGHT</h5>
              <img
                src="/img/footer-image.jpg"
                alt=""
                style={{ width: "50%" }}
              />
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li className=" grey-text text-lighten-3">
                  <NavLink to="/">HOME</NavLink>
                </li>
                <li className=" grey-text text-lighten-3">
                  <NavLink to="/">SERVICES</NavLink>
                </li>
                <li className=" grey-text text-lighten-3">
                  <NavLink to="/gallery">GALLERY</NavLink>
                </li>
                <li className=" grey-text text-lighten-3">
                  <NavLink to="/">CONTACT</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2020 Copyright Seven Ravens
            <a
              className="grey-text text-lighten-4 right"
              href="https://www.facebook.com/sevenravenspaintingminiatures/"
              target="_blank"
            >
              <img
                src="/img/facebook-icon.png"
                alt=""
                style={{ width: "20px" }}
                href="https://www.facebook.com/sevenravenspaintingminiatures/"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
