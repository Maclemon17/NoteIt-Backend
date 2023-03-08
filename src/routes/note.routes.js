const { addNote, getNote, getAllNotes, updateNote, deleteNote } = require("../controllers/note.controller");
const authMiddleware = require("../middlewares/authMiddleware");


const router = require("express").Router();

router.post("/notes", authMiddleware, addNote);
router.get("/notes/:noteId", authMiddleware, getNote);
router.get("/notes", authMiddleware, getAllNotes);
router.patch("/notes/:noteId", authMiddleware, updateNote);
router.delete("/notes/:noteId", authMiddleware, deleteNote);

const noteRouter = router;

module.exports = noteRouter;