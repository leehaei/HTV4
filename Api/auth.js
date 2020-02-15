const User = require('../DB/User')
const bcrypt = require('bcryptjs');

console.log("user",User)

module.exports = {
    
    signUp: async (req, res, next) => {
        console.log('UsersController.signUp() called!');
        const userParam = { username, password } = req.value.body;

        //check if there is a user with the same username
        const foundUser = await User.findOne({ username });
        if (foundUser) {
            res.status(403).json({error:"username is already in use"})
        }

        user.hash = bycrypt.hashSync(userParam.password,10)
        const newUser = new User({ username, password });
        await newUser.save();
        res.json({ user:"created "});
    },

    //https://jasonwatmore.com/post/2018/06/14/nodejs-mongodb-simple-api-for-authentication-registration-and-user-management
    login: async (req, res, next) => {
        const { username, password } = req.value.body;
        const user = await User.findOne({ username });
        if (user && bycript.compareSync(password, user.hash)) { 
            const { hash, ...userWithoutHash } = user.toObject();
            const token = jwt.sign({ sub: user.id }, config.secret );
            return {
                ...userWithoutHash,
                token
            }

        }
    },

    secret: async (req,res,next) => {

    }





}