var express = require("express");
var io = require("socket.io");
var app = express();
var path = require("path");
var http = require("http");
var server = http.createServer(app);
var cors = require("cors");
var socket = io(server);
app.use(cors());
const PORT = process.env.PORT || 8090;

app.use(express.static(path.join(__dirname, "../frontend/chat-app/dist")));
//handle the routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/chat-app", "index.html"));
});

//socket connection and event emmission
socket.on("connection", (port) => {
  console.log(
    "A new User Connected with ip address: " + port.handshake.address
  );
  port.on("Join_room", (data) => {
    port.join(data);
    console.log(`User With IP ${port.handshake.address} joined room ${data}`);
  });

  port.on("send_message", (data) => {
    port.to(data.room).emit("recive_message", data);
  });
});

server.listen(PORT, () => {
  console.log(`Running in port number ${PORT}`);
});
