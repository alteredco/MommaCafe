const http      = require("http"),
express         = require("express"),
bodyParser  = require("body-parser"),
mongoose     = require("mongoose");

mongoose.connect("mongodb://localhost:27017/momma_cafe", {useNewUrlParser: true});
const port = 3000;
const app = express();

app.use(bodyParser.urlencoded( {extended:true} ));

app.set("views", "./app/views");
app.set("view engine", "ejs")

// SCHEMA SETUP
let cafeSchema = new mongoose.Schema({
  name: String,
  image: String,
  city: String,
  country: String,
  description: String
});

const Cafe = mongoose.model("Cafe", cafeSchema);

// Cafe.create(
//   {
//     name: "Lulu Cafe", 
//     image:"https://www.spottedbylocals.com/brussels/files/lulu-home-interior-brussels-by-sarah-filion.jpg",
//     city: "Brussels",
//     country: "Belgium",
//     description: "Set in an interiors shop, there is plenty of room for strollers, good food, child seats and a few toys. A bonus is an 'Amelie' style photobooth in the corner!"
//   }, (err, cafe) =>{
//     if(err) {
//       console.log(err);
//     } else {
//       console.log("NEWLY CREATED CAFE:  ");
//       console.log(cafe);
//     }
//   }
// )

// { "_id" : ObjectId("5c4edcd5bbbca90daf8e7d0d"), "name" : "Sky Cafe", "image" : "http://i2.wp.com/www.belgiumwithkids.com/wp-content/uploads/sky-cafe.jpg", "city" : "Brussels", "country" : "Belgium", "__v" : 0 }
// { "_id" : ObjectId("5c4edd8a1088c40de6a8bef7"), "name" : "Lulu Cafe", "image" : "https://www.spottedbylocals.com/brussels/files/lulu-home-interior-brussels-by-sarah-filion.jpg", "city" : "Brussels", "country" : "Belgium", "__v" : 0 }
// { "_id" : ObjectId("5c4eddfab77cf80dfe573133"), "name" : "Garage-à-Manger ", "image" : "http://designseptember.be/commerce-design/img_look/projet/b71640a49fced6a5d0102d139aba0db5.jpg", "city" : "Brussels", "country" : "Belgium", "__v" : 0 }
// { "_id" : ObjectId("5c4ede7a13d9190e14c2891c"), "name" : "La Fabrique", "image" : "https://www.thebrusselsprouts.me/wp-content/uploads/2014/10/P1150551.jpg", "city" : "Brussels", "country" : "Belgium", "__v" : 0 }

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

app.listen(port, ()=> {
  console.log("MommaCafe has started!")
});