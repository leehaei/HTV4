const User = require('../DB/User')
console.log("user",User)

module.exports = {
    signUp: async (req, res, next) => {
        console.log('UsersController.signUp() called!');
        const { username, password } = req.value.body;
        // const username = req.value.body.username;
        // const password = req.value.body.password;
        const newUser = new User({ username, password });
        await newUser.save();

        res.json({ user:"created "});
    }


}