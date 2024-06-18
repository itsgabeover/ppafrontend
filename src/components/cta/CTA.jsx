import React from 'react'
import './cta.css'
import { Link } from 'react-router-dom'
const CTA = () => {
  return (
    <div className="cta">
      <div className="cta-content">
        <p>Leveraging AI to accelerate performance</p>
        <h3>Securely Upload your Insurance Policy for Analysis</h3>
      </div>
      <div className="cta-btn">
        <button type="button">
          <Link to="/getstarted">Get Started</Link>
        </button>
      </div>
    </div>
  );
}

export default CTA