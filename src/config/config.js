require("dotenv").config();


module.exports = {
    port: process.env.PORT || 4000,
    mongoURI: process.env.MONGO_URI,
    salt: Number(process.env.SALT_ROUND),
    secret: process.env.JWT_SECRET,
}