const { decodeToken } = require("../controllers/auth.contoller");
const Users = require("../models/user.model");

const authMiddleware = async (req, res, next) => {
    const { authorization } = req.headers;
    const token = authorization && authorization.split(" ")[1];

    if (!token) {
        res.status(401).json({ message: "Invalid or Missing Token", status: false })
    } else {
        try {
            // decode token
            const decoded = decodeToken(token);
        
            req.user = await Users.findOne({ email: decoded.data }).select("-password");

            return next();
        } catch (error) {
            res.status(401).json({ message: "Bad or Expired Token", status: false })
        }
    }
}

module.exports = authMiddleware;