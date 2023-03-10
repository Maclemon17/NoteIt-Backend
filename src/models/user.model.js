const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { salt } = require("../config/config");

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
    hasAcceptedTerms: {
        type: Boolean,
        default: false
    }
},
    { timestamps: true }
);

// HASH PASSWORD
userSchema.pre("save", function (next) {
    bcrypt.hash(this.password, salt, (err, hashed) => {
        if (err) {
            next(err);
        } else {
            this.password = hashed;
            next();
        }
    });

})


userSchema.methods.validatePassword = function (password, callBack) {

    bcrypt.compare(password, this.password, (err, isValid) => {
        if (!err) {
            callBack(err, isValid);
        } else {
            console.log(err);
            next();
        }
    })
}


const Users = mongoose.model("Users", userSchema);

module.exports = Users;