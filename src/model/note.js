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
        ref: "User",
        required: true,
    }

}, { timestamps: true }
)

const Note = mongoose.model("Notes", noteSchema);

module.exports = Note;