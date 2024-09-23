import React from "react";
import { FaBusAlt } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
 import { FaTrain } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import logo from "../assets/logo.png"
import '../components/Navbar.css';

import { Link } from "react-router-dom";




const Navbar=()=>{
    return (
      <div className="Navbar">
        <div className="Logo-img">
          <Link to="/">
            <img src={logo} alt="ticketix logo" />
          </Link>
        </div>

        <div className="BookingOptions">
          <ul>
            <li>
              <Link className="Links1" to="/plane_booking">
                <span>
                  <FaPlane color="#CAF0F8" />
                </span>
                <p>Plane</p>
              </Link>
            </li>
            <li>
              <Link className="Links1" to="/">
                <span>
                  <FaTrain color="#CAF0F8" />
                </span>
                <p>Train</p>
              </Link>
            </li>
            <li>
              <Link className="Links1" to="/bus_booking">
                <span>
                  <FaBusAlt color="#CAF0F8" />
                </span>
                <p>Bus</p>
              </Link>
            </li>
          </ul>
        </div>

        <div className="Options-Navbar">
          <div className="Offers-Navbar">
            <Link className="Links1" to="/offers">
              <span>
                <MdLocalOffer color="#CAF0F8" />
              </span>
              <p>Offers</p>
            </Link>
          </div>
          <div className="Profile-Navbar">
            <Link className="Links1" to="/login">
              <span>
                <IoMdLogIn color="#CAF0F8" />
              </span>
              <p>Login/signup</p>
            </Link>
          </div>
        </div>
      </div>
    );
}


export default Navbar;