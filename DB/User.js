const mongoose = require('mongoose')
require('mongoose-double')(mongoose);
const Schema = mongoose.Schema;

// const SchemaTypes = mongoose.Schema.Types;
const user = new Schema({
    username:String,
    password:String
});


const User = mongoose.model('user',user)

module.exports = User;