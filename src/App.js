import { useEffect } from 'react';
import './App.css';
import Chat from './components/chats/Chat';
import Sidebar from './components/sidebar/Sidebar';
import Pusher from "pusher-js"
import axios from './axios';
import { useState } from 'react';



const App = () => {

  const[messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync')
    .then(res => {
      console.log(res.data);
      setMessages(res.data); 
    });
  },[])


  useEffect(() => {
    const pusher = new Pusher('ed94a8b9ce8932a13626', {
      cluster: 'ap2'
    });
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage]);
    });


    return() => {
      channel.unbind_all();
      channel.unsubscribe();
    }

  },[messages])

  console.log(messages)


  return (
    <div className="app">
      <div className="app-body">
        <Sidebar/>  
        <Chat messages = {messages} />
      </div>
     </div> 
  );
}

export default App;
