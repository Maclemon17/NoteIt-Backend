const { addNote, getNote, getAllNotes } = require("../controllers/note.controller");
const authMiddleware = require("../middlewares/authMiddleware");


const router = require("express").Router();

router.post("/notes", authMiddleware, addNote);
router.get("/notes/:noteId", authMiddleware, getNote);
router.get("/notes", authMiddleware, getAllNotes)

const noteRouter = router;

module.exports = noteRouter;