const mongoose = require("mongoose"),
Cafe =  require("../models/cafe");
Comment = require("../models/comment");

let data = [
  {
    name: "Lulu Cafe",
    image: "https://www.spottedbylocals.com/brussels/files/lulu-home-interior-brussels-by-sarah-filion.jpg",
    city: "Brussels",
    country: "Belgium",
    description: "Lovely spot, great coffees and brunches. It is kid friendly with toys and books to entertain the little ones while have a coffee. Plenty of room for prams and there is a changing table in the toilets. You can even find an 'Amelie'-style photobooth in the corner!"
  },
  {
    name: "Garage-à-Manger",
    image: "http://designseptember.be/commerce-design/img_look/projet/b71640a49fced6a5d0102d139aba0db5.jpg",
    city: "Brussels",
    country: "Belgium",
    description: "Good cafe for families and has a populoar Sunday brunch( get reservations though! ). There is an air stream play area to keep the kids busy with books and toys! The concept is great. The cafe is connected directly on to a second-hand bookstore called 'Pele-Mele'."
  },
  {
    name: "La Fabrique",
    image: "https://www.thebrusselsprouts.me/wp-content/uploads/2014/10/P1150551.jpg",
    city: "Brussels",
    country: "Belgium",
    description: "La Fabrique is children-friendly but just enough so it doesn’t become a noisy playground. The food is fantastic and they even make their own tea blend! As all awesome places, it gets crowded on brunch days so do call to book a table."
  },
  {
    name: "Sky Cafe",
    image: "http://i2.wp.com/www.belgiumwithkids.com/wp-content/uploads/sky-cafe.jpg",
    city: "Brussels",
    country: "Belgium",
    description: "It may not have the best food or coffee, but Sky Cafe, located in the Belgian Military Museum  can't be beat for atmosphere and kid-friendly location. It is in the giant hangar filled with planes and (best part for you) this where you can sip a coffee or beer and watch the little ones frolic and even try sitting in the cockpit of a fighter plane next to the tables."
  }
]

function seedDB() {
  Cafe.remove( {}, function(err) {
    if(err){
      console.log(err);
    }
    console.log("Removed all cafes!");
  });

  data.forEach(function(seed) {
    Cafe.create(seed, function(err, cafe) {
      if(err) {
        console.log(err);
      } else {
        console.log("Added Cafe!");
        Comment.create(
          {
            text: "I love this place!",
            author: "MommaBird"
          }, function(err, comment){
            if(err) {
              console.log(err);
            }else {
              cafe.comments.push(comment);
              cafe.save();
              console.log("Created new comment!");
            }
          });
      }
    });
  });
}

module.exports = seedDB;
