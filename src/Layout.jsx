import React from "react";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";
import { useState } from "react";
import mailsData from "./mails";

function Layout() {
  const [openMenu, setOpenMenu] = useState(true);

  const toggle = () => {
    setOpenMenu((prev) => !prev);
  };
  return (
    <div className="container">
      <Navbar toggle={toggle} />
      <div className="sub-container">
        {openMenu ? <SideBar /> : null}

        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
