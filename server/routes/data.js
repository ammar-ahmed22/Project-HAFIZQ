const express = require("express");
const router = express.Router();

const { testEndpoint, getListings, createListing, getListing, updateListing } = require("../controllers/data");

router.route("/test").get(testEndpoint);
router.route("/listings").get(getListings);
router.route("/add-listing").post(createListing);
router.route("/listing/:id").get(getListing);
router.route("/update/:id").post(updateListing);


module.exports = router;
