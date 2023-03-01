const { loginUser } = require("../controllers/auth.contoller");


const router = require("express").Router();

router.post("/login", loginUser);

const authRouter = router;

module.exports = authRouter;