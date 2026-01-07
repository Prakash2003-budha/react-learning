import {useState} from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css"

export function ChatInput({chatMessages, setChatMessage}) {
        const [inputText, setInputText] = useState('');
        

        function saveInputText(event){
          setInputText(event.target.value)
        }

        async function sendMessage(){
          

          const newChatMessages = [
            ...chatMessages,
            {
              message:inputText,
              sender:'user',
              id:crypto.randomUUID()
            }
          ]

          setChatMessage([...newChatMessages,
            {
              message : 'Loading...',
              sender: 'robot',
              id: crypto.randomUUID()
            }
          ]);

          const response = await Chatbot.getResponse(inputText);
          setChatMessage([
            ...newChatMessages,
            {
              message:response,
              sender:'robot',
              id:crypto.randomUUID()
            }
          ]);
          

          setInputText('');
        }
        function handleKeyDown(event){
          if (event.key === 'Enter'){
            sendMessage();
          } else if (event.key === 'Escape'){
            setChatMessage([])
          }
        }

        return (
          <div className="chat-input-component">
            <input  
              placeholder="Send a message to ChatBot" 
              size="30"
              onChange = {saveInputText}
              onKeyDown={handleKeyDown}
              value = {inputText}
              className="Input-box"
            />
            <button 
              onClick ={sendMessage}
              className = "send-button"
            > Send</button>
          </div>
        );
      }