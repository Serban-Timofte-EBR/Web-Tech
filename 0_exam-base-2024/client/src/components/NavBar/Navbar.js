import React from "react";
import { Link } from "react-router-dom";

// Aici am facut un navbar simplu cu 2 linkuri ca sa navigam mai usor
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
