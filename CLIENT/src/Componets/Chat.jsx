

import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import './Chat.css'
function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };   

  useEffect(() => {
    socket.on("receive_message", (data) => {

      setMessageList((list) => [...list, data]);
      
    });
    
  }, [socket]);
 
  return (
    <>
    <div className="w-full h-[70vh] bg-gray-100 mt-[10%]">
      <div className="chat-header">
        <p>Live Chat</p> 
      </div>
      <div className="chat-container">
        <ScrollToBottom className="bg-gray-200">
          {messageList.map((messageContent) => {
            return (
              <div
                className="message"
                id={username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.author}</p>
                    <p id="author">{messageContent.time}</p>
                  </div>
                </div>
              </div>
            );
          })}
            
        </ScrollToBottom>
        <div className="">
       
      </div>
      <textarea
          type="text"
          
          className=" mt-[70%]  h-[100px] w-[50%] bg-gray-600 sticky"
          value={currentMessage}
          placeholder="Messsage..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}className="h-[50px] text-pink-900 absolute" >send</button>
      </div>
    </div>
    </>
  );
}
 
export default Chat;