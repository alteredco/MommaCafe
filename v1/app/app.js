const http = require("http"),
express = require("express"),
bodyParser = require("body-parser");

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded( {extended:true} ));

app.set("views", "./app/views");
app.set("view engine", "ejs")

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
  },
  {
    name: "Sky Cafe",
    image:"http://i2.wp.com/www.belgiumwithkids.com/wp-content/uploads/sky-cafe.jpg"
  }
]

app.get("/", function(req, res) { 
  res.render("landing");
});

app.get("/cafes", function(req, res) {
  res.render("cafes", {cafes: cafes});
});

app.post("/cafes", function(req, res) {
  let name = req.body.name;
  let image = req.body.image;
  let newCafe = {name: name, image: image}
  cafes.push(newCafe);
  res.redirect("/cafes");
});

app.get("/cafes/new", function(req, res) {
  res.render("new");
});

app.listen(port, ()=> {
  console.log("MommaCafe has started!")
});