const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const config = require("./src/config/config");


const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect DB
const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false)
        await mongoose.connect(config.mongoURI).then(
            console.log("MONGODB Connected Sucessfully...")
        );
    } catch (error) {
        console.error(error);
    }
}


// run server
app.listen(config.port, async function () {
    try {
        // connect to db
        await connectDB()
        console.log(`NoteIt App is running on port: ${config.port}`);
    } catch (error) {
        console.log(error);
    }
});