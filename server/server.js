var express = require("express");
var app = express();
var path = require("path");
const http = require("http");
const server = http.createServer(app);
const socket = require("socket.io")(server);

app.use(express.static(path.join(__dirname, "../frontend/chat-app/dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/chat-app", "index.html"));
});

socket.on("connection", (port) => {
  console.log(`A new User ${port.handshacke.address} connected`);
});

app.listen(8090, () => {
  console.log("Running in port number 8090");
});
