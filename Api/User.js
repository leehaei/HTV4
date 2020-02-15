const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');
const route = express.Router();

// route.use(express.json());

route.post('/', async(req,res) => {
    const{username,
        password,
        date,
        university,
        tuition,
        program,
        program_length,
        expected_help,
        grants,
        loans,
        income,
        housing,
        food
    } = req.body;

    let user = {};
    user.username = username;
    user.password = password;
    user.date = date;
    user.university = university;
    user.tuition = tuition;
    user.program = program;
    user.program_length = program_length;
    user.expected_help = expected_help;
    user.grants = grants;
    user.loans = loans;
    user.income = income;
    user.housing = housing;
    user.food = food;
    
    console.log('user created', user.username);

    let userModel = new User(user);
    await userModel.save();
    res.json(userModel); 
})

module.exports = route; 


//https://www.youtube.com/watch?v=Qn0SOL8vK8w