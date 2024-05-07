
import React from "react";
import "./Pages.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from '../Componets/Chat'
import Navbar from "../Componets/Navbar/Navbar";


const socket = io.connect("http://localhost:3000");
const initialValues={
 username:'',
}
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
    <>
    <Navbar/>
    <div className="bg-pink-100 h-fit flex justify-evenly  p-[2%]">
      <div className="basis-[100%] pl-[4%]">
      {!showChat ? (
        <div className="mt-[30%] bg-white shadow-lg p-4 h-fit w-[60%] ml-[10%]">
          <h3 className="text-pink-900 font-serif font-bold">Join Chat</h3>
         <br/>
         <label className="block mb-4">
            Username:
          <input
            type="text"
            id="name"
            className="w-full p-2 border rounded mt-5"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          </label>
        <label className="block mb-4">
            Room:
            <select value={room} onChange={(e) => setRoom(e.target.value)} className="w-full p-2 border rounded mt-1">
              <option value="teacher">Teacher</option>
              <option value="parent">Parent</option>
              <option value="parent">General</option>
            </select>
          </label>
          <button type="submit" onClick={joinRoom} className="bg-pink-900 py-2 px-2 w-[50%]  font-bold">Join A Room</button>
          
        </div>
        
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
      </div>
      <div className="justify-[100%] h-[90vh] mr-[10%] w-full mt-[3%]">
        <img src="assests/parent image.png" className="h-[70vh] object-contain mr-[15% mt-[2%]]" />
        <div>
         
         
        </div>
      </div>
    </div>
    </>
  );
}
