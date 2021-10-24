const mongoose = require("mongoose");

// Database connection function
const connectDB = async () =>{
    await mongoose.connect(process.env.MONGO_ATLAS_URI, {useNewUrlParser: true, useUnifiedTopology: true});

    console.log("Connected to DB with URI:", process.env.MONGO_ATLAS_URI);
};

module.exports = connectDB;