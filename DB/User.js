const mongoose = require('mongoose')
require('mongoose-double')(mongoose);
const Schema = mongoose.Schema;

const SchemaTypes = mongoose.Schema.Types;
const user = new Schema({
    username: {
        type:String,
        required:true,
        unique:true
    },    
    password: {
        type:String,
        required:true,
    }, 
    date: {
        type:Date
    },   
    university:{
        type:String
    },    
    tuition:{
        type:SchemaTypes.Double
    },    
    program:{
        type:String
    },    
    program_length:{
        Number
    },    
    expected_help: {
        type: SchemaTypes.Double
    },        
    grants:{
        type:SchemaTypes.Double
    },
    loans:{
        type:SchemaTypes.Double
    },        
    incomeSchool:{
        type:SchemaTypes.Double
    },    
    housing:{
        type:SchemaTypes.Double
    },    
    incomeGrad:{
        type:SchemaTypes.Double
    }        
});


const User = mongoose.model('user',user)

module.exports = User;