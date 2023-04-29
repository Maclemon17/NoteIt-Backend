const { loginUser } = require("../controllers/auth.contoller");
const authValidator = require("../utils/validators/auth.validtor");


const router = require("express").Router();

router.post("/login", authValidator.login, loginUser);

const authRouter = router;

module.exports = authRouter;