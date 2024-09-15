import React from 'react';
import './SideBar.css';
import EditIcon from '@mui/icons-material/Edit';
import {Link} from "react-router-dom";
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';

function SideBar() {
  return (
    <>
    <div className='side-bar'>
        <div className='compose'>
            <EditIcon className='edit-icon'/>
            Compose
        </div>
        <div className='list'>
        <a href='/inbox' className='inbox'><InboxOutlinedIcon />Inbox</a>
        <a href='/starred'className='starred'><StarOutlineOutlinedIcon />Starred</a>
        <a href='/snoozed'className='snoozed'><WatchLaterOutlinedIcon />Snoozed</a>
        <a href='/sent' className='sent'><SendOutlinedIcon />Sent</a>
        <a href='/drafts' className='drafts'><InsertDriveFileOutlinedIcon />Drafts</a>
        </div>

    </div>
    </>
  )
}

export default SideBar