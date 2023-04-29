const { hidePassword } = require("../helpers/password");
const Users = require("../models/user.model");

// @desc    Register new User
// @route   POST /api/user/register
// @access  Public
const registerUser = async (req, res, next) => {
    try {
        const { email, username } = req.body;
        let newUser = new Users({ ...req.body, email: email.toLowerCase() })

        // check if username or password already exists
        const user = await Users.findOne({
            $or: [{ email: email.toLowerCase() }, { username: username.toLowerCase() }]
        })
        // console.log(user);

        if (user) {
            if (user.username === username.toLowerCase() && user.email === email.toLowerCase()) {
                return res.json({ message: "User Already exists", status: false })
            } else if (user.username === username.toLowerCase()) {
                return res.json({ message: "Username Already exists", status: false })
            } else if (user.email === email.toLowerCase()) {
                return res.json({ message: "Email Already exists", status: false })
            }
        } else {
            // save to database
            try {
                await newUser.save();

                // HIDE PASSWORD
                const userInfo = await hidePassword(newUser);

                return res.status(201).json({ message: "user created", status: true, data: userInfo })

            } catch (error) {
                return res.status(500).json({ message: error.message, status: false })
            }
        }

    } catch (error) {
        console.log(error);
        next(error);
    }
}


// @desc    Get user Profile
// @route   GET /api/user/profile
// @access  Private
const getProfile = async (req, res) => {
    // get the authenticated user details
    const { email } = await req.user;
    // console.log(user.email);
    const authenticatedUser = await Users.findOne({ email }).select("-password");

    res.status(200).json({ message: "Profile ready", status: true, data: authenticatedUser })
}

const test = (req, res) => {
    res.json({
        appname: "NOTEIT",
        author: "Maclemon"
    })
}


module.exports = {
    registerUser,
    getProfile,
    test
}