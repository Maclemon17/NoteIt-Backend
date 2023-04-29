const noteSchema = require("../validation-schemas/note.schema")


const addNote = (req, res, next) => {
    const { error } = noteSchema.validate(req.body);

    if (error) {
        // If the request data is invalid, return a 400 error with the details
        return res.status(400).json({ error: error.details, status: false });
    }

    // If the request data is valid, call the next middleware or route handler
    next();
}

const editNote = (req, res, next) => {
    const { error } = noteSchema.validate(req.body);

    if (error) {
        // If the request data is invalid, return a 400 error with the details
        return res.status(400).json({ error: error.details, status: false });
    }

    // If the request data is valid, call the next middleware or route handler
    next();
}

module.exports = {
    addNote,
    editNote
}