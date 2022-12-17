import React from 'react'
import "./Chat.css"
import { Avatar, IconButton } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import { useState, useRef, useEffect } from 'react';
import axios from '../../axios';

const Chat = ({messages}) => {
  const[inputMessage, setInputMessage] = useState("");

  const bottomRef = useRef(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [messages]);

  const postingMessage = async(e) => {
    e.preventDefault();
    await axios.post("messages/new", {
      message: inputMessage,
      name:"shubhi",
      timestamp: "Just now",
      recieved: false
    })
    setInputMessage("");
  }
  return (
    <div className='chat'>
       <div className="chat-header">
        <Avatar/>
        <div className="chat-headerInfo">
          <h3>Room name</h3>
          <p>Last seen at ..</p>
        </div>
        <div className="chat-headerRight">
          <IconButton>
            <SearchOutlinedIcon/>
          </IconButton>
          <IconButton>
            <AttachFileOutlinedIcon/>
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon/>
          </IconButton>
        </div>
       </div>
       <div className="chat-body">
        {messages?
        messages.map((m) => (
          <p className={m.recieved?'chat-message': 'chat-message chat-reciever'}>
          <span className="chat-name">
            {m.name}
          </span>
          {m.message}
          <span className="chat-timestamp">
            {m.timestamp}
          </span>
        </p>
        )
        ):""}
       <div ref={bottomRef} />
       </div>
       <div className="chat-footer">
          <InsertEmoticonIcon/>
           <form>
            <input type="text" placeholder='Type a message' value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} />
            <button type='submit' onClick={postingMessage}>Send a message</button>
           </form>
          <MicNoneOutlinedIcon/>
       </div>
    </div>
  )
}

export default Chat