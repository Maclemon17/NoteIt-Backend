const User = require("../models/user.model");


const registerUser = async (req, res, next) => {
    try {
        const { email, username } = req.body;
        // check if username or password already exists
        const user = await User.findOne({
            $or: [{ email: email }, { username: username }]
        })

        if (user) {

        }
    } catch (error) {
        console.log(error);
    }
}



const test = (req, res) => {
    res.json({
        appname: "NOTEIT",
        author: "Maclemon"
    })
}


module.exports = {
    registerUser,
    test
}