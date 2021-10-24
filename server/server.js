// Environment variables
require("dotenv").config({path: "config.env"});


const express = require('express');
const cors = require('cors');
const connectDB = require("./utils/connectDB");


const app = express();

// Limiting data to 30mb in order to not take too much memory
app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb",extended:true}));

// Cross origin middleware
app.use(cors())

// Connecting to database
connectDB();

// All endpoints prefixed with /api/data
app.use("/api/data", require("./routes/data"));

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, ()=>console.log(`Server listening on PORT ${PORT}`));

// Limiting big error messages in console
process.on("unhandledRejection", (err, promise) =>{
    console.log("Logged Error:", err);

    server.close(()=>process.exit(1))

})