// import React from 'react'
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import OrangeButton from "./OrangeButton";
import WhiteButton from "./WhiteButton";

const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink className="navLogo" to={`/`}>
            <h1>3DIFY</h1>
          </NavLink>

          <div className="navCenter">
            <NavLink
              className={(e) => {
                return e.isActive ? "NavPageActive" : "";
              }}
              to="/"
            >
              <li>Home</li>
            </NavLink>

            <NavLink
              className={(e) => {
                return e.isActive ? "NavPageActive" : "";
              }}
              to="/3-D Model Generation"
            >
              <li>3-D Model Generation</li>
            </NavLink>

            <NavLink
              className={(e) => {
                return e.isActive ? "NavPageActive" : "";
              }}
              to="/Multi-View Image Generation"
            >
              <li>Multi-View Image Generation</li>
            </NavLink>

            <NavLink
              className={(e) => {
                return e.isActive ? "NavPageActive" : "";
              }}
              to="/Gallery"
            >
              <li>Gallery</li>
            </NavLink>

            <NavLink
              className={(e) => {
                return e.isActive ? "NavPageActive" : "";
              }}
              to="/about"
            >
              <li>About</li>
            </NavLink>

            <NavLink
              className={(e) => {
                return e.isActive ? "NavPageActive" : "";
              }}
              to="/login"
            >
              <li>Login</li>
            </NavLink>
          </div>

          <div className="navRight">
            <WhiteButton />
            <OrangeButton />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
