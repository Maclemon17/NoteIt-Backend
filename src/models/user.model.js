const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        min: 3,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePictureUrl: {
        type: String,
        default: ""
    },
    notes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Notes"
        }
    ],
    hasAcceptedTerms: {
        type: Boolean,
        default: false
    }
},
    { timestamps: true }
);

const Users = mongoose.model("User", userSchema);

module.exports = Users;