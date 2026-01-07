import { useState, useRef, useEffect } from 'react'
import robotprofile from './assets/robot.png'
import userprofile from './assets/profile.png'
import {ChatInput} from './components/ChatInput.JSX'
import './App.css'

      function ChatMessage({message, sender}){
        return(
          <div className={
            sender === 'user'?
             'chat-message-user':
             'chat-message-robot'
            }>
            {sender === "robot" && (
              <img src={robotprofile}
              className = " chat-message-profile" />
            )}
            <div className="chat-text">
              {message}
            </div>
            {sender ==="user" && (
              <img src={userprofile}
              className="chat-message-profile" />
            )}
          </div>
        ); 
      }

      function ChatMessages({chatMessages}){   
        const chatMessagesRef = useRef(null);
        useEffect(()=>{
          const containerElem = chatMessagesRef.current;
          if (containerElem){
            containerElem.scrollTop = containerElem.scrollHeight;

          }
        },[chatMessages]);  
        return (
          <div className="chat-messages-container"
            ref = {chatMessagesRef}>
            {chatMessages.map((chatMessage)=>{
              return(
                <ChatMessage 
                  message = {chatMessage.message}
                  sender = {chatMessage.sender}
                  key= {chatMessage.id}
                />
              );
            })}
          </div>
        );
      }
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
