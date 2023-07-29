const { addNote, getNote, getAllNotes, updateNote, deleteNote } = require("../controllers/note.controller");
const authMiddleware = require("../middlewares/authMiddleware");
const noteValidator = require("../utils/validators/note.validator")


const router = require("express").Router();

router.post("/notes", authMiddleware, noteValidator.addNote, addNote);
router.get("/notes/:noteId", authMiddleware, getNote);
router.get("/notes", authMiddleware, getAllNotes);
router.put("/notes/:noteId", authMiddleware, noteValidator.editNote, updateNote);
router.delete("/notes/:noteId", authMiddleware, deleteNote);

const noteRouter = router;

module.exports = noteRouter;
