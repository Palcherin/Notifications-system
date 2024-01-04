
import React from "react";
import "./Pages.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from '../Componets/Chat'

const socket = io.connect("http://localhost:5050");

export const Chatroom=() =>{
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };
  

  return (
    <div className="chat-room">
      {!showChat ? (
        <div className="joinChatContainer">
          <div className="chat-intro">
          <h1>Come, Let's Talk</h1>
          <p>We understand of your concern towards your children's safety and well being everytime. Thats why we let you channel your concern to the right olace everytime you have one. Fill the form below, with your name and the group you want to adress as the room i.e (teachers,staff,parents e.t.c). Your message will be replied to by the concerned party as soon as possible.</p>
          <h5>Talk to us, Live without worries </h5>
          </div>
          <h3>Join Chat</h3>
          <input
            type="text"
            id="name"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          /><br/>
          <input
          id="roomId"
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          /><br/>
          <button onClick={joinRoom} className="button">Join A Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

