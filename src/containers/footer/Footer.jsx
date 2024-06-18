import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="footer-heading">
        <p>Precision Policy Advisory</p>
      </div>

      <div className="footer-links">
        <div className="footer-links_logo">
          <p>
            Freehold NJ, <br /> All Rights Reserved
          </p>
        </div>
        <div className="footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="footer-links_div">
          <h4>Get in touch</h4>
          <p>Freehold, NJ</p>
          <p>732-222-2222</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className="footer-copyright">
        <p>@2024 PPA. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer