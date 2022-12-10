import './App.css';
import Chat from './components/chats/Chat';
import Sidebar from './components/sidebar/Sidebar';


function App() {
  return (
    <div className="app">
      <div className="app-body">
        <Sidebar/>  
        <Chat/>
      </div>
     </div> 
  );
}

export default App;
