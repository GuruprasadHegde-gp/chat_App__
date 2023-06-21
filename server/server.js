const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hey There");
});

app.listen(8080, () => {
  console.log("Running in port number 8080");
});
