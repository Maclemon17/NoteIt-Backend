const { trusted } = require("mongoose");
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

        // check if note exist
        if (!note) {
            return res.status(404).json({ message: "Note not found", status: false })
        }

        // check if the user is authorised
        if (req.user.id.toString() !== note.author.id.toString()) {
            return res.status(401).json({ message: "Unauthorised User", status: false })
        }

        res.status(200).json({ message: "Note ready", status: true, data: note })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Server Error", status: false })
    }
}

// @desc    get all notes
// @route   GET /api/user/notes
// @access  Private
const getAllNotes = async (req, res, next) => {
    try {
        const allNotes = await Notes.find({ author: req.user.id }).populate({
            path: "author",
            select: "email username"
        })

        // check if notes is not empty
        if (allNotes.length != 0) {
            // check if the user is authorised
            if (req.user.id.toString() !== allNotes[0].author.id.toString()) {
                return res.status(401).json({ message: "Unauthorised User", status: false })
            }

            res.status(200).json({ message: "Note ready", status: true, allNotes })
        } else {
            res.status(200).json({ message: "User note is empty", status: false, data: allNotes })
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error", status: false })
    }
}

// @desc    update note
// @route   PUT /api/user/notes/noteId
// @access  Private
const updateNote = async (req, res, next) => {
    try {
        const note = await Notes.findById(req.params.noteId)

        if (!note) {
            return res.status(400).json({ message: "Note not found", status: false })
        }

        // check if user exists
        const user = await Users.findById(req.user.id)

        // check if user is authorised
        if (note.author.toString() !== user.id) {
            return res.status(401).json({ message: "Unauthorised User", status: false })
        }

        // update the selected note resource
        const updatedNote = await Notes.findByIdAndUpdate(req.params.noteId, req.body,
            { new: true }
        )

        return res.status(200).json({
            message: "Note Updated",
            status: true,
            data: updatedNote
        })

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: "Server Error", status: false })
    }

}

// @desc    get a single note
// @route   DELETE /api/user/notes/noteId
// @access  Private
const deleteNote = async (req, res, next) => {
    try {
        const note = await Notes.findById(req.params.noteId)

        if (!note) {
            return res.status(400).json({ message: "Note not found", status: false })
        }

        // check if user exists
        const user = await Users.findById(req.user.id)

        // check if user is authorised
        if (note.author.toString() !== user.id) {
            res.status(401).json({ message: "Unauthorised User", status: false })
        }

        const deletedNote = await Notes.findByIdAndDelete(req.params.noteId)

        return res.status(200).json({ message: "Note deleted", status: true, deletedNote })

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: "Server Error", status: false })
    }

}


module.exports = {
    addNote,
    getNote,
    getAllNotes,
    updateNote,
    deleteNote
}