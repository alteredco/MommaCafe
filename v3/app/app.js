const http      = require("http"),
express         = require("express"),
app = express(),
bodyParser  = require("body-parser"),
mongoose     = require("mongoose"),
methodOverride = require("method-override"),
Cafe= require("../models/cafe");

mongoose.connect("mongodb://localhost:27017/momma_cafe", {useNewUrlParser: true});
const port = 3000;

app.use(bodyParser.urlencoded( {extended:true} ));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));

app.set("views", "./app/views");

app.get("/", function(req, res) { 
  res.render("landing");
});

//INDEX ROUTE
app.get("/cafes", function(req, res) {
  Cafe.find({}, (err, allCafes) => {
    if(err) {
      console.log(err);
    } else {
      res.render("index", {cafes: allCafes});
    }
  })
});

//CREATE ROUTE
app.post("/cafes", function(req, res) {
  let name = req.body.name;
  let image = req.body.image;
  let city = req.body.city;
  let country = req.body.country;
  let desc = req.body.description;
  let newCafe = {name: name, image: image, city:city, country:country, description:desc}
 Cafe.create(newCafe, function(err, newlyCreated) {
   if(err) {
     console.log(err);
   } else {
    res.redirect("/cafes");
   }
 });
});

//NEW ROUTE
app.get("/cafes/new", function(req, res) {
  res.render("new");
});

//SHOW ROUTE
app.get("/cafes/:id", function(req, res) {
  Cafe.findById(req.params.id, function(err, foundCafe) {
    if(err) {
      console.log(err);
    } else {
      res.render("show", {cafe: foundCafe});
    }
  })
});

//EDIT ROUTE
app.get("/cafes/:id/edit", function(req,res) {
  res.send("Edit Cafe");
})

//UPDATE ROUTE
// app.put("/cafes/:id")

app.listen(port, ()=> {
  console.log("MommaCafe has started!")
});