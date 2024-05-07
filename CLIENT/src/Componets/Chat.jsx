

import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import './Chat.css'
function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async (e) => {
    e.preventDefault()
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
      if (data.author !== username) {
        setMessageList((list) => [...list, data]);
      }
    });
    
    return () => {
      socket.off("receive_message");
    };
  }, [socket, username]);
 
  return (
    <>
    <div className="bg-white min-h-[100vh] max-h-fit relative w-[50vw] z-0">
    <div className="w-full h-fit bg-white mt-[10%] shadow-2xl">
      <div className="chat-header">
        <p>Live Chat</p> 
      </div>
      <div className="chat-container">
        <ScrollToBottom className="bg-WHITE">
          {messageList.map((messageContent) => {
            return (
              <div
                className="w-[100%] rounded"
                id={username === messageContent.author ? "you" : "other"}
              >
                <div className="block ">
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                    <div className="font-bold block w-fit">
                    <p id="time" className="text-black">{messageContent.author}</p>
                    <p id="author" className="font-bold text-xm">{messageContent.time}</p>
                  </div>
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
          
          className=" mt-[70%]  h-[100px] w-[50%] bg-slate-200 sticky text-black p-3"
          value={currentMessage}
          placeholder="Messsage..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}className="h-[50px] text-white font-bild sticky bg-pink-500 p-2 rounded ml-5 w-[20%]" >send</button>
      </div>
    </div>
    </div>
    </>
  );
}
 
export default Chat;