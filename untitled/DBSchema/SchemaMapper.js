let mongoose 		= require('mongoose');
const Schema        = mongoose.Schema;

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

mongoose.model('User', User);

mongoose.connect('mongodb://localhost:27017/user', (err) => {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log('Connected to the DB');
});

module.exports = mongoose;