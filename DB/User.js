const mongoose = require('mongoose');

const user = mongoose.Schema({
    username:{
        type:String
    },
    date:{
        type:Date
    },
    university:{
        type:String 
    },
    tuition:{
        type:Double
    },
    program:{
        type:String
    },
    program_length:{
        type:Integer
    }, 
    expected_help:{
        type:Double
    },
    grants:{
        type:Double
    },
    loans:{
        type:Double
    },
    income:{
        type:Double
    },
    housing:{
        type:Double
    },
    food:{
        type:Double
    }
});

module.exports = User = mongoose.model('user',user);