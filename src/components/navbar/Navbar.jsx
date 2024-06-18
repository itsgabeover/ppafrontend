import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { useNavigate, Link, useLocation } from "react-router-dom";
//BEM Block element modifier __


const Menu = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      {currentPath === "/" && (
        <>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <a href="#features">Features</a>
          </p>
          <p>
            <Link to="/getstarted">Get Started</Link>
          </p>
          <p>
            <Link to="/learn">Learn More</Link>
          </p>
        </>
      )}
      {currentPath === "/getstarted" && (
        <>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/learn">Learn More</Link>
          </p>
        </>
      )}
      {currentPath === "/learn" && (
        <>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/getstarted">Get Started</Link>
          </p>
        </>
      )}
    </>
  );

}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <a href="/">
            <div className="navbar-title">
              <p>Policy</p>
              <p>Precision</p>
              <p>Advisory</p>
            </div>
          </a>
        </div>
        <div className="navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="navbar-sign">
        <p>Sign in</p>
        <button type="button ">Sign up</button>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#2b31a6"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#2b31a6"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <Menu />
              <div className="navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button ">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar