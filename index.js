require("dotenv").config()
const {interact} = require("./database_pointer.js")
const express = require("express")
const mongo = require("mongoose")

const app = express();

app.get("/",async(req,res)=>{
    const value = await interact();
    console.log("Value" + value);
    res.status(200).send(value);
})
app.get("/search/:register_no",async(req,res)=>{
    console.log(req.params.register_no);
    const value = await interact({'Register_no':Number(req.params.register_no)});
    if(!value)
        res.status(404).send("Invalid Register no");
    else{
    console.log("Value" + value);
    res.status(200).send(value);
    }
})

mongo.connect(process.env.URL)
.then(()=>{
    app.listen(process.env.PORT,(error)=>{
        if(error)
            console.log("Backend Error");
        else
            console.log("Server Listening At "+ process.env.PORT);
    });
})
.catch((error)=> {console.log("MongoError");})