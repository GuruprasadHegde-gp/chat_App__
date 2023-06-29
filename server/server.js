var express = require("express");
var io = require("socket.io");
var app = express();
var path = require("path");
var http = require("http");
var server = http.createServer(app);
var cors = require("cors");
var socket = io(server);
app.use(cors());

app.use(express.static(path.join(__dirname, "../frontend/chat-app/dist")));
//handle the routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/chat-app", "index.html"));
});
app.get("/Room", (req, res) => {
  //create a room in socket
  socket.on("createRoom", (room) => {
    console.log("Room Created");
    socket.join(room);
  });
});

//socket connection and event emmission
socket.on("connection", (port) => {
  console.log(
    "A new User Connected with ip address: " + port.handshake.address
  );
  setTimeout(() => {
    port.emit("WelcomeEmit", {
      description: "Welcome to the Chat App",
    });
  }, 4000);
});

server.listen(8090, () => {
  console.log("Running in port number 8090");
});
