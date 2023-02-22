const { registerUser, test } = require("../controllers/user.controller");


const router = require("express").Router();

router.post("/register", registerUser);
router.get("/test", test)

const userRouter = router;

module.exports = userRouter;