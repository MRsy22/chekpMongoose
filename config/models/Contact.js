const mongoose = require ("mongoose")

const schema = mongoose.Schema

const contactSchema =  new schema({
    name:{
        type:String,
        require: true,
    },
    email:{
        type:String,
        require: true,
        unique: true,
    },
    phone:{
        type:Number,
    },
});

module.exports = Contact = mongoose.model("contact",contactSchema);