import React from "react";
import { FaBusAlt } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
 import { FaTrain } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import logo from "../assets/logo.png"
import '../components/Navbar.css'


const Navbar=()=>{
    return (
      <div className="Navbar">
        <div className="Logo-img">
          <img src={logo} alt="" />
        </div>

        <div className="BookingOptions">
          <ul>
            <li>
              <span>
                <FaPlane />
              </span>
              <p>Plane</p>
            </li>
            <li>
              <span>
                <FaTrain />
              </span>
              <p>Train</p>
            </li>
            <li>
              <span>
                <FaBusAlt />
              </span>
              <p>Bus</p>
            </li>
          </ul>
        </div>

        <div className="Options-Navbar">
          <div className="Offers-Navbar">
            <span>
              <MdLocalOffer />
            </span>
            <p>Offers</p>
          </div>
          <div className="Profile-Navbar">
            <span>
              <IoMdLogIn />
            </span>
            <p>Login/signup</p>
          </div>
        </div>
      </div>
    );
}


export default Navbar;