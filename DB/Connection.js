const mongoose = require('mongoose');

const URI = "mongodb+srv://Jiwoo:123@cluster0-tjs0g.mongodb.net/test?retryWrites=true&w=majority"

const connectDB = async() => {
    await mongoose.connect(URI,{ 
        useUnifiedTopology: true,
        useNewUrlParser: true 
    });
    console.log('db connected');
}

module.exports = connectDB
