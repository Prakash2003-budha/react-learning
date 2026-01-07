import { useState,} from 'react'
import { ChatMessages } from './components/ChatMesssages/chatMessages.jsx';
import {ChatInput} from './components/Chatinput/chatInput.jsx'
import './App.css'
    
function App(){

        const [chatMessages, setChatMessage] = useState(
            []
        );
        return(
          <div className="app-container">
            {chatMessages.length === 0 &&(
              <p className = "welcome-message">Welcome to the chatbot project! Send a message using the testbox below</p>
            )}            
            <ChatMessages 
              chatMessages = {chatMessages}
              
            />
            <ChatInput 
              chatMessages = {chatMessages}
              setChatMessage = {setChatMessage}
            />
            
          </div>
        );
      }

export default App
