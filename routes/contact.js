const express = require("express")
const Contact = require("../")

const router = express.Router();

router.get("/test",(req,res) =>{

    res.send("Hello world");
});

router.post("/add",async (req,res) =>{
    try {
        const {name,email,phone} = req.body;
        const newContact = new Contact({name , email , phone});
        await newContact.save()
        res.status(200).send({msg: "Contact add succ..", newContact});
    } catch (error) {
        res.status(404).send({msg: "Can not add contact", error})
    }
});

router.get("/all",async (req,res) =>{
  try{  const listContacts = await Contact.find();
    res
       .status(200)
       .send({msg:"This is the list of all contact...",listContacts});
    } catch(error) {
      res.status(400).send({msg:"Can not get the Contact!!!",error});
    }
});

router.get("/:id",async (req,res) =>{
    try {
        const contactToGet = await Contact.findOne({_id:req.params.id});
        res
        .status(200)
        .send({msg:"I get the contact ...",contactToGet});
    } catch (error) {
        res.status(400).send({msg:"Can not get the Contact!!!",error});
    }
});

router.delete("/:id",async (req,res) =>{
    try {
        const{_id } = req.params;
         await Contact.findOneAndDelete({_id})
         res.status(200).send({msg:"Contact Delete..."})
    } catch (error) {
        res.status(400).send({msg:"Can not Delete the contact with this id!!!",error});
        
    }
});


router.put("/:id",async (req,res) =>{
    try {
        const{_id} = req.params
        const result = await Contact.up({_id},{$set: {...req.body}});
        res.status(200).send ({ msg:"contact Update..."})
    } catch (error) {
        res.status(400).send({msg:"Can not edit contact with this id",error});
    }
});

module.exports = router;