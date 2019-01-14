const http = require("http");
const express = require("express");
const port = 3000;
const app = express();

app.set("views", "./app/views");
app.set("view engine", "ejs")

app.get("/", function(req, res) { 
  res.render("landing");
});

app.get("/cafes", function(req, res) {
  let cafes = [
    {
      name: "Lulu Cafe", 
      image:"https://www.spottedbylocals.com/brussels/files/lulu-home-interior-brussels-by-sarah-filion.jpg"
    },
    {
      name: "Garage-à-Manger",
      image:"http://designseptember.be/commerce-design/img_look/projet/b71640a49fced6a5d0102d139aba0db5.jpg"
    },
    {
      name: "La Fabrique",
      image:"https://media-cdn.tripadvisor.com/media/photo-s/12/b4/48/b3/la-fabrique.jpg"
    }
  ]

  res.render("cafes", {cafes: cafes});
})

app.listen(port, ()=> {
  console.log("MommaCafe has started!")
});