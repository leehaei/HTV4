const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');
const route = express.Router();

// route.use(express.json());

route.post('/', async(req,res) => {
    console.log('req.body', req.body);
    const{username,password} = req.body;
    let user = {};
    user.username = username;
    user.password = password;
    console.log('user22', user.username);
    let userModel = new User(user);
    await userModel.save();
    // console.log('userModel', userModel);
    res.json(userModel); 
})

module.exports = route; 


//https://www.youtube.com/watch?v=Qn0SOL8vK8w