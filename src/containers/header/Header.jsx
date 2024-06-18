import React from 'react'
import people from "../../assets/people.jpg";
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header section__padding" id="home">
      <div className="header-content">
        <h1 className="gradient__text">Transform Your Policy Reviews</h1>
        <p>Discover a Smarter Way to Evaluate Life Insurance Policies</p>

        <div className="header-content__input">
          <button type="button">
            <Link to="/getstarted">Get Started</Link>
          </button>
        </div>
      </div>

      <div className="header-image">
        <img src={people} alt="people" />
      </div>
    </div>
  );
}

export default Header