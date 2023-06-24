const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "../frontend/chat-app/dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/chat-app", "index.html"));
});

app.listen(8080, () => {
  console.log("Running in port number 8080");
});
