const express = require("express");

const app = express();

app.use(express.json());


const connectDB = require("./config/connectDB")
connectDB()


app.use('/api/contact',require('./routes/contact'))


const PORT = 5200;

app.listen(PORT,(error)=>{
    error
    ? console.error("Failed to connect to server!!! ${error} ")
    : console.log("Serveur is running on port ${PORT}...");
});