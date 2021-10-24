const express = require("express");
const router = express.Router();

const { testEndpoint, getListings, createListing, getListing, updateListing, findListings } = require("../controllers/data");

// Testing endpoint (not in use)
router.route("/test").get(testEndpoint);

// Retrieves all listings
router.route("/listings").get(getListings);

// Creates listing
router.route("/add-listing").post(createListing);

// Gets a specific listing by its id
router.route("/listing/:id").get(getListing);

// Updates a specific listing by its id
router.route("/update/:id").post(updateListing);

// Searches listing with a name query
router.route("/search").get(findListings);


module.exports = router;
