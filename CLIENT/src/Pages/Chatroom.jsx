
import React from "react";
import "./Pages.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from '../Componets/Chat'

const socket = io.connect("http://localhost:3000");

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
       <div className='flex justify-start h-[100vh] bg-pink-200 pt-[5%]'>
    <div className='h-[90%] basis-[100%]'>
      <img src='assests/home pic.png' className='h-[80vh]'/>
    </div>
    <div className='basis-[100%] pt-[15%]'>
      <h1 className='text-5xl font-bold'>The Quintessential<br/> School Bus Application</h1>
      <p className='text-xl'>A powerful tool to make school commuting easier and safer</p>
      {/* <img src='assests/ic6.svg' className='animate-spin ml-[20%]'/> */}
      <button className='bg-pink-900 px-6 py-2 mt-10 tect-xl font-bold hover:bg-pink-800 rounded-full'>Get Started</button>
    </div>
   </div>
    <div className="bg-pink-100 h-[100vh] flex justify-evenly gap-10 p-[2%]">
      <div className="basis-[100%] pl-[4%]">
      {!showChat ? (
        <div className="joinChatContainer">
          <div className="chat-intro">
          <h1 className="font-bold text-2xl text-pink-900">Come, Let's Talk</h1>
          <p className="w-[80%]">We understand of your concern towards your children's safety and well being everytime. Thats why we let you channel your concern to the right olace everytime you have one.</p>
          <h5>Talk to us, Live without worries </h5>
          </div>
          <h3 className="text-pink-900 font-serif font-bold">Join Chat</h3>
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
          <button onClick={joinRoom} className="bg-pink-900 py-2 px-4 w-[50%] text-xl font-bold">Join A Room</button>
          <img className="animate-ping mt-10 " src="assests/ic4.svg" />
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
      </div>
      <div className="justify-[100%] h-[90vh] pr-[8%] w-full">
        <img src="assests/parent image.png" className="h-[90vh] object-cover" />
        <div>
         
         
        </div>
      </div>
    </div>
    </>
  );
}

