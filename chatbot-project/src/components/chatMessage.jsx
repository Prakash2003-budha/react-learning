import robotprofile from '../assets/robot.png'
import userprofile from '../assets/profile.png'

export function ChatMessage({message, sender}){
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