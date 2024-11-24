import React from "react";
import "./SideBar.css";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";

function SideBar({onComposeClick}) {
  return (
    <>
      <div className="side-bar">
        <div className="compose" onClick={onComposeClick}>
          <EditIcon className="edit-icon" />
          Compose
        </div>
        <div className="list">
          <Link to="/inbox" className="inbox">
            <InboxOutlinedIcon />
            Inbox
          </Link>
          <Link to="/starred" className="starred">
            <StarOutlineOutlinedIcon />
            Starred
          </Link>
          {/* <Link to="/snoozed" className="snoozed">
            <WatchLaterOutlinedIcon />
            Snoozed
          </Link>
          <Link to="/sent" className="sent">
            <SendOutlinedIcon />
            Sent
          </Link>
          <Link to="/drafts" className="drafts">
            <InsertDriveFileOutlinedIcon />
            Drafts
          </Link> */}
        </div>
      </div>
    </>
  );
}

export default SideBar;
