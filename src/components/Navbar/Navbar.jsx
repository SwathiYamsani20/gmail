import React from "react";
import "./Navbar.css";
import logo from "../../assets/gmaillogo.jpeg";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar({ toggle }) {
  return (
    <div className="navbar">
      <div onClick={toggle}>
        {" "}
        <MenuIcon />
      </div>
      <img src={logo} alt="mail-img" className="logo" />
    </div>
  );
}

export default Navbar;
