const express = require("express");
const app = express();
const http = require("http");
const router = express.Router();
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User connected ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });
  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

module.exports = router;

// const express=require('express');
// const app=express();
// const http=require("http");
// const {Server} =require("socket.io");
// const cors=require("cors")

// app.use(cors());


// const server=http.createServer(app)

// const io=new Server(server,{
//     cors:{
//         origin:"http://localhost:5073",
//         method:["GET","POST"],
//     }
// });

// io.on("connection", (socket)=>{
//     console.log(`user connected: ${socket.id}`);
//     socket.on("send_message", (data)=>{
//         socket.broadcast.emit("receive_message", data)
//     })
//     socket.on("disconnected",()=>{
//         console.log("user disconnected", socket.id)
//     } )
// })

// server.listen(3004,() =>{
//     console.log("SERVER is running");
// })