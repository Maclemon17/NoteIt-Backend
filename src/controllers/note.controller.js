const Notes = require("../models/note.model");

// @desc    Add new note
// @route   POST /api/user/add-note
// @access  Private
const addNote = async (req, res, next) => {
    try {
        const { title, note } = req.body;

        const newNote = new Notes({
            title: title,
            note: note,
            author: req.user._id
        });

        // save new note
        await newNote.save();

        res.status(201).json({ message: "note created", status: true, data: newNote })
    } catch (error) {
        console.log("ERROR @ NOTE CONTROLLER...");
        res.json({ message: error.message })
    }
    
}

// @desc    get a single note note
// @route   POST /api/user/get-note/id
// @access  Private
const getNote = async (req, res, next) => {

    console.log("get single note....");
}


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