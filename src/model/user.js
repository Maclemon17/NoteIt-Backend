const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        username: { type: String, required: true, min: 3 },
        password: { type: String, required: true },
        profilePictureUrl: { type: String, default: " " },
        notes: { type: Array },
        hasAcceptedTerms: { type: Boolean, default: false }
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;