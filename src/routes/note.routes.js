const { addNote } = require("../controllers/note.controller");
const authMiddleware = require("../middlewares/authMiddleware");


const router = require("express").Router();

router.post("/add-note", authMiddleware, addNote);
router.get("")

const noteRouter = router;

module.exports = noteRouter;