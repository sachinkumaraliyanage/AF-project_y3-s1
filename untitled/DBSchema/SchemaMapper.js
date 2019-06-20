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

let Course=new Schema({

    cid:{
        type:String
    },

    cname:{
        type:String
    },

    enrollkey:{
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
    accepted:{
        type:String

    },


});

let CourseInstructor=new Schema({

    cid:{
        type:String
    },

    iemail:{
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
    notified:{
        type:String

    },


});

let CourseStudent=new Schema({

    cid:{
        type:String
    },

    semail:{
        type:String
    },

    adddate:{
        type:String
    },

    editdate:{
        type:String
    },
    enrolled:{
        type:String

    },


});

mongoose.model('Course',Course);
mongoose.model('User', User);
mongoose.model('CourseInstructor', CourseInstructor);
mongoose.model('CourseStudent', CourseStudent);


mongoose.connect('mongodb://localhost:27017/AF', (err) => {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log('Connected to the DB');
});

module.exports = mongoose;