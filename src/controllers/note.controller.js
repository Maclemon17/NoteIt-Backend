const Notes = require("../models/note.model");


const addNote = async (req, res, next) => {
    try {
        const { title, note } = req.body;

        let newNote = new Notes(req.body)

        await newNote.save();

        res.status(201).json({ message: "note created", status: true, data: newNote })

    } catch (error) {
        console.log("ERROR @ NOTE CONTROLLER...");
        res.json({ message: error.message })
    }



}


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