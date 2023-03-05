const Notes = require("../models/note.model");
const Users = require("../models/user.model");

// @desc    Add new note
// @route   POST /api/user/notes
// @access  Private
const addNote = async (req, res, next) => {
    try {
        const { title, note } = req.body;

        const newNote = new Notes({
            title: title,
            note: note,
            author: req.user._id // from the middleware
        });

        // save new note
        await newNote.save();

        res.status(201).json({ message: "note created", status: true, data: newNote })
    } catch (error) {
        console.log("ERROR @ NOTE CONTROLLER...");
        res.json({ message: error.message, status: false });
    }

}

// @desc    get a single note
// @route   POST /api/user/notes/noteId
// @access  Private
const getNote = async (req, res, next) => {
    try {
        const note = await Notes.findById(req.params.noteId).populate({
            path: "author",
            select: "email username"
        })

        // check if the user is authorised
        if (req.user._id.toString() !== note.author._id.toString()) {
            return res.status(401).json({ message: "Unauthorised User", status: false })
        }

        res.status(200).json({ message: "Note ready", status: true, note })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Server Error", status: false })
    }
}

// @desc    get a single note
// @route   GET /api/user/notes
// @access  Private
const getAllNotes = async (req, res, next) => {

    console.log("get all notes....");
}


const updateNote = async (req, res, next) => {

    console.log("update note....");
}

const deleteNote = async (req, res, next) => {

    console.log("delete single note....");
}


module.exports = {
    addNote,
    getNote,
    getAllNotes,
    updateNote,
    deleteNote
}