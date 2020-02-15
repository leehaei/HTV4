const User = require('../DB/User')
console.log("user",User)

module.exports = {
    signUp: async (req, res, next) => {
        console.log('UsersController.signUp() called!');
        const { username, password } = req.value.body;

        //check if there is a user with the same username
        const foundUser = await User.findOne({ username });
        if (foundUser) {
            res.status(403).json({error:"username is already in use"})
        }

        const newUser = new User({ username, password });
        await newUser.save();
        res.json({ user:"created "});
    },

    login: async (req, res, next) => {

    },

    secret: async (req,res,next) => {

    }





}