const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    note: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.schema.Types.ObjectId,
        ref: "Users",
        required: true,
    }

}, { timestamps: true }
)

const Notes = mongoose.model("Notes", noteSchema);

module.exports = Notes;