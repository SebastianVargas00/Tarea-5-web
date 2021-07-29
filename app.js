const express= require ("express");
const app=express();
const mongoose= require("mongoose");
const bodyparser=require("body-parser");
const cors= require("cors");
require("dotenv/config");

//MiddleWare Body-Parser
app.use(cors());
app.use(bodyparser.json());

//Import Routes
const PostRoute= require("./routes/posts");

//Middleware
app.use("/posts",PostRoute);


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true },()=>{
 console.log("Connected")
});

app.listen(3000);
