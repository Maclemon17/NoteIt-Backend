const authSchema = require("../validation-schemas/auth.schema")


const login = (req, res, next) => {
    const { error } = authSchema.validate(req.body);

    if (error) {
        // If the request data is invalid, return a 400 error with the details
        return res.status(400).json({ error: error.details, status: false });
    }

    // If the request data is valid, call the next middleware or route handler
    next();
}

module.exports = {
    login
};