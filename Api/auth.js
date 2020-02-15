const User = require('../DB/User')
const bycrypt = require('bcryptjs');

console.log("user",User)

module.exports = {
    
    signUp: async (req, res, next) => {
        console.log('UsersController.signUp() called!');
        try {
            var username = req.username;
            var password = req.password;

            //check if there is a user with the same username
            const foundUser = await User.findOne({ username });
            if (foundUser) {
                res.status(403).json({error:"username is already in use"})
            }

            User.hash = bycrypt.hashSync(password,10)
            const newUser = new User({ username, password });
            await newUser.save();
            //res.json({ user:"created "});
          }
          catch(e) {
            console.log('Catch an error: ', e)
          }
        
    },

    //https://jasonwatmore.com/post/2018/06/14/nodejs-mongodb-simple-api-for-authentication-registration-and-user-management
    login: async (req, res, next) => {
        var username = req.username;
        var password = req.password;
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