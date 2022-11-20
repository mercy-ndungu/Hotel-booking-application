import "./navbar.css"
import React, { useState } from "react";
// import Login from "./pages/login/Login";
// import Register from './pages/register/Register';
import {Link} from "react-router-dom"

const Navbar = () => {
// const handleClick = () => {
//   handleLoginClick()
// }


  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Easy Book</span>
        <div className="navItems">
          <Link path to="/register"> <button className="navButton">Register</button></Link>
         <Link path to="/login"><button className="navButton">Login</button></Link>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar