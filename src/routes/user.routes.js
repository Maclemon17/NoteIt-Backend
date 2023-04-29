const { registerUser, test, getProfile } = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/authMiddleware");
const userValidator = require("../utils/validators/user.validator")

const router = require("express").Router();

router.post("/register", userValidator.register, registerUser);
router.get("/profile", authMiddleware, getProfile);
router.get("/test", test)

const userRouter = router;

module.exports = userRouter;