const Users = require("../models/user.model");
const User = require("../models/user.model");


const registerUser = async (req, res, next) => {
    try {
        const { email, username } = req.body;
        let newUser = new Users(req.body)

        // check if username or password already exists
        const user = await User.findOne({
            $or: [{ email: email }, { username: username }]
        })

        if (user) {
            if (user.username === username && user.email === email) {
                return res.json({ message: "User Already exists", status: false })
            } else if (user.username === username) {
                return res.json({ message: "Username Already exists", status: false })
            } else if (user.email === email) {
                return res.json({ message: "Email Already exists", status: false })
            }
        } else {
            // save to database
            try {
                await newUser.save();

                return res.status(201).json({ message: "user created", status: true, data: newUser })

            } catch (error) {
                return res.status(500).json({ message: error.message, status: false })
            }
        }

    } catch (error) {
        console.log(error);
        next(error);
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