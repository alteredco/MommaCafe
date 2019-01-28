const http      = require("http"),
express         = require("express"),
bodyParser  = require("body-parser"),
mongoose     = require("mongoose");

mongoose.connect("mongodb://localhost/momma_cafe");
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
  country: String
});

const Cafe = mongoose.model("Cafe", cafeSchema);

// Cafe.create(
//   {
//     name: "La Fabrique", 
//     image:"https://www.thebrusselsprouts.me/wp-content/uploads/2014/10/P1150551.jpg",
//     city: "Brussels",
//     country: "Belgium"
//   }, (err, cafe) =>{
//     if(err) {
//       console.log(err);
//     } else {
//       console.log("NEWLY CREATED CAFE:  ");
//       console.log(cafe);
//     }
//   }
// )

app.get("/", function(req, res) { 
  res.render("landing");
});

app.get("/cafes", function(req, res) {
  Cafe.find({}, (err, allCafes) => {
    if(err) {
      console.log(err);
    } else {
      res.render("cafes", {cafes: allCafes});
    }
  })
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