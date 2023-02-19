const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
    {
        
    }
)

const Note = mongoose.model("Notes", noteSchema);

module.exports = Note;