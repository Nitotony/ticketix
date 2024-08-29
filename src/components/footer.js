import React from "react";
import "../components/footer.css"; 

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Popular Destinations in India</h2>
          <ul>
            <li>
              <a href="#taj-mahal">Taj Mahal</a>
            </li>
            <li>
              <a href="#jaipur">Jaipur</a>
            </li>
            <li>
              <a href="#goa">Goa</a>
            </li>
            <li>
              <a href="#kerala">Kerala</a>
            </li>
            <li>
              <a href="#delhi">Delhi</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#contact-us">Contact Us</a>
            </li>
            <li>
              <a href="#privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms-of-service">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
      <p>&#169; 2024 Ntc united </p>
    </div>
  );
};

export default Footer;
