const express= require ("express");
const router= express.Router();
const Post=require("../models/Post");

//Return all posts
router.get("/",async (req,res)=>{
    try {
        const Getposts=await Post.find();
        res.json(Getposts);   
    } catch (error) {
        res.json({message: error});   
    }  
});
//Send a posts
router.post("/",async(req,res)=>{
  const post=new Post({
      nombre:req.body.nombre,
      apellido:req.body.apellido,
      telefono:req.body.telefono
  });
  try {
    const SavePost= await post.save();
    res.json(SavePost);
  } catch (error) {
      res.json({message: error});   
  }
});

//Search for a specific posts
router.get("/:postId",async (req,res)=>{
    try {
        const post=await Post.findById(req.params.postId);
        res.json(post);   
    } catch (error) {
        res.json({message: error});    
    }
})

module.exports= router;