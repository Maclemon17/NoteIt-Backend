const authRouter = require("./auth.routes");
const noteRouter = require("./note.routes");
const userRouter = require("./user.routes");

const registerRoutes = (app) => {
    app.use("/api/user", userRouter, noteRouter);
    app.use("/api/auth/", authRouter)

    
}


module.exports = registerRoutes;
