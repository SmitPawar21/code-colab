import React from "react";
import { FaHome, FaFolder, FaFileCode, FaUserFriends, FaUser, FaCog, FaQuestionCircle } from "react-icons/fa";
import "../styles/Navbar.css";
import {useNavigate} from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">colab-code</div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li onClick={() => navigate('/dashboard')}><FaHome className="icon" /> Dashboard</li>
        <li><FaFolder className="icon" /> Your Projects</li>
        <li><FaFileCode className="icon" /> All Files</li>
        <li><FaUserFriends className="icon" /> Friends</li>
        <li  onClick={() => navigate('/profile')}><FaUser className="icon" /> Profile</li>
        <li><FaCog className="icon" /></li>
        <li><FaQuestionCircle className="icon" /></li>
      </ul>
    </nav>
  );
};

export default Navbar;
