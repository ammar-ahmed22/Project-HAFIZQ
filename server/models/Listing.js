const mongoose = require("mongoose");

// Database model for a listing
const ListingSchema = new mongoose.Schema({
    name: String,
    about: String,
    location: String,
    admission: String,
    image: String
}, {timestamps: true})

const Listing = mongoose.model("Listing", ListingSchema);


module.exports = Listing;