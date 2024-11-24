import React, { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";
import Compose from "./components/Compose/Compose"; // Import Compose component

function Layout() {
  const [openMenu, setOpenMenu] = useState(true);
  const [isComposeOpen, setIsComposeOpen] = useState(false); // State for Compose

  const toggle = () => {
    setOpenMenu((prev) => !prev);
  };

  const handleComposeClick = () => {
    setIsComposeOpen(true); // Open Compose when clicked
  };

  const closeCompose = () => {
    setIsComposeOpen(false); // Close Compose when done
  };

  return (
    <div className="container">
      <Navbar toggle={toggle} />
      <div className="sub-container">
        {openMenu ? <SideBar onComposeClick={handleComposeClick} /> : null} {/* Pass handleComposeClick */}
        
        <Outlet />

        {/* Conditionally render Compose component */}
        {isComposeOpen && <Compose closeCompose={closeCompose} />}
      </div>
    </div>
  );
}

export default Layout;
