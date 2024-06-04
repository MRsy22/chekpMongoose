const mongoose = require("mongoose");

const connectDB = async ()=>{
    try{
        await mongoose.connect(
            "mongodb+srv://sayeghomar:123456mern@cluster0.dlgwcde.mongodb.net/"
        );
        console.log("Database connect succ ...");
    } catch(error){
      console.log("Database in not connect!!!",error);
    }
};

module.exports = connectDB;
