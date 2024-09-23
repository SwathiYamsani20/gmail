import React from "react";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";
import { useState } from "react";
import mailsData from "./mails";

function Layout() {
  const [openMenu, setOpenMenu] = useState(true);
  const [mails, setMails] = useState(mailsData);
  const toggleStar = (id) => {
    setMails(
      mails.map((mail) =>
        mail.id === id ? { ...mail, starred: !mail.starred } : mail
      )
    );
  };

  const starredMails = mails.filter((mail) => mail.starred);

  const toggle = () => {
    setOpenMenu((prev) => !prev);
  };
  return (
    <div className="container">
      <Navbar toggle={toggle} />
      <div className="sub-container">
        {openMenu ? <SideBar /> : null}

        <Outlet context={{ mails, toggleStar, starredMails }} />
      </div>
    </div>
  );
}

export default Layout;
