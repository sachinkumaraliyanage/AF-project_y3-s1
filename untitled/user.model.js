const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let User=new Schema({

    firstName:{
        type:String
    },

    lastName:{
        type:String
    },

    email:{
        type:String
    },
    bday:{
        type:String
    },
    pno:{
        type:String
    },
    password:{
        type:String
    },
    types:{
        type:Object
    },
    address:{
        type:String
    },
    addby:{
        type:String
    },
    adddate:{
        type:String
    },
    editby:{
        type:String
    },
    editdate:{
        type:String
    },
    status:{
        type:Boolean

    },


});


module.exports=mongoose.model('User',User);