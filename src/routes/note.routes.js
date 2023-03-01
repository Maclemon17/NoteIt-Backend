const { addNote } = require("../controllers/note.controller");


const router = require("express").Router();

router.post("/add-note", addNote);

const noteRouter = router;

module.exports = noteRouter;