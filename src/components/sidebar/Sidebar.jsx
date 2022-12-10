import React from 'react'
import "./Sidebar.css";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import { Avatar, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Sidebarchat from './Sidebarchat';
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar_header">
            <div className="headerLeft">
                <Avatar src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
            </div>
            <div className="headerRight">
                <IconButton>
                    <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                    <ChatIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
        </div>
        <div className='sidebar-search'>
            <div className="sidebar-searchContainer">
                <SearchOutlinedIcon/>
                <input type="text" placeholder='Search or start a new chat'/>
            </div>
        </div>

        <div className="sidebar-chats">
            <Sidebarchat/>
            <Sidebarchat/>
            <Sidebarchat/>
        </div>
    </div>
  )
}

export default Sidebar