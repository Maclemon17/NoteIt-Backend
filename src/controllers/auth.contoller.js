const { secret } = require("../config/config");
const { hidePassword } = require("../helpers/password");
const Users = require("../models/user.model");
const jwt = require("jsonwebtoken");


// @desc    Login User
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // check if user exists
        let user = await Users.findOne({ email });

        // hide user password to send with response
        const userInfo = await hidePassword(user);

        if (!user) {
            res.status(404).json({ message: "User not found", status: false })
        } else {
            // VALIDATE PASSWORD IF USER EXISTS
            user.validatePassword(password, (err, isValid) => {
                if (err) {
                    res.status(501).json({ message: "Server Error", status: false })
                } else {
                    if (!isValid) {
                        res.status(400).json({ message: "Invalid credentials", status: false })
                    } else {
                        // GENERATE TOKEN
                        const token = generateToken(user.email);

                        res.status(200).json({ message: "Loggedin successfull", status: true, userInfo, token })
                    }
                }
            })
        }
    } catch (error) {
        console.log(error);

        res.status(501).json({ message: error.message, status: false })
    }
}



// GENERATE TOKEN 
const generateToken = (data) => {
    const token = jwt.sign({ data }, secret, { expiresIn: "2h" });

    return token;
}

const decodeToken = (token) => {
    return jwt.verify(token, secret)
}


module.exports = {
    loginUser,
    generateToken,
    decodeToken
}