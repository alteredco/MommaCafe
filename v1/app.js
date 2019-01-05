const http = require("http");
const express = require("express");
const port = 3000;

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) { 
  res.send("This will be the landing page soon!");
});

app.listen(port, ()=> {
  console.log("MommaCafe has started!")
});