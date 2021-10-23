const Listing = require("../models/Listing");
const ErrorResponse = require("../utils/errorResponse");

exports.testEndpoint = (req, res, next) =>{
    res.status(200).json({
        success: true,
        message: "Endpoint functioning",

    })
}

exports.getListings = async (req, res, next) =>{
    try {
        const listings = await Listing.find({});

        if (!listings){
            return next(new ErrorResponse("Error finding listings", 400))
        }

        sendData(listings, "Successfully retrievied listings", res, true)
        
    } catch (error) {
        return next(error)
    }
}

exports.getListing = async (req, res, next) =>{
    const { id } = req.params;
    try {
        const listing = await Listing.findById(id)

        if (!listing){
            return next( new ErrorResponse("Cannot find listing", 404))
        }

        sendData(listing, "Successfully retrieved listing", res);
    } catch (error) {
        return next(error)
    }
}

exports.updateListing = async (req, res, next) =>{
    const { id } = req.params;
    const { name, about, location, admission, image } = req.body;
    const { isImage } = req.query;
    try {
        const listing = await Listing.findById(id);

        if (!isImage){
            listing.name = name;
            listing.about = about;
            listing.location = location;
            listing.admission = admission;
        }else{
            listing.image = image;
        }
        

        const updated = await listing.save();

        if (!updated){
            return next( new ErrorResponse("Could not update", 400))
        }

        sendData(updated, "Succesfully updated listing", res);
    } catch (error) {
        return next(error)
    }
}

exports.createListing = async (req, res, next) =>{
    const { name, about, location, admission, image} = req.body;

    try {
        const listing = await Listing.create({
            name,
            about,
            location,
            admission,
            image
        })

        if (!listing){
            return next( new ErrorResponse("Could not add listing", 400));
        }

        const updatedListings = await Listing.find({});

        sendData(updatedListings, "Successfully added listing", res, true)
    } catch (error) {
        return next(error)
    }
}

exports.findListings = async (req, res, next) => {
    const { query } = req.query;
    

    const queryRegex = new RegExp(query.split("&").join(" "), "i");
    
    try {
        const listings = await Listing.find({name: queryRegex})

        if (listings.length === 0){
            sendData([], "Could not find any matches", res, true);
        }

        sendData(listings, "Successfully found listings", res, true);
    } catch (error) {
        next(error)
    }
}


const sendData = (payload, message, res, array=false) =>{
    if (array){
        res.status(200).json({
            success: true,
            message,
            count: payload.length,
            payload
        })
    }else{
        res.status(200).json({
            success: true,
            message,
            payload
        })
    }


}