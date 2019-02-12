const mongoose    = require("mongoose");

// SCHEMA SETUP
let cafeSchema = new mongoose.Schema({
  name: String,
  image: String,
  city: String,
  country: String,
  description: String,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

module.exports = mongoose.model("Cafe", cafeSchema);