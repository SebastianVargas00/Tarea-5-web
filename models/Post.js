const mongoose= require("mongoose");

const Postsch= mongoose.Schema({
    nombre:{
        type:String,
        require:true
    },
    apellido:{
        type:String,
        require:true
    },
    telefono:{
        type:Number,
        require:true
    }
});

module.exports=mongoose.model("Posts",Postsch);