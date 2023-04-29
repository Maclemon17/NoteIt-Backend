const { registerationSchema } = require("../validation-schemas/user.schema");


const register = (req, res, next) => {
    const { error } = registerationSchema.validate(req.body);

    if (error) {
        // If the request data is invalid, return a 400 error with the details
        return res.status(400).json({ error: error.details, status: false });
    }

    // If the request data is valid, call the next middleware or route handler
    next();
}

const editprofile = (req, res, next) => {


    if (error) {
        // If the request data is invalid, return a 400 error with the details
        return res.status(400).json({ error: error.details, status: false });
    }

    // If the request data is valid, call the next middleware or route handler
    next();
}

const test = () => {
    console.log("test....");
}

module.exports = {
    register,
    editprofile
}