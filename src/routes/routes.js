const userRouter = require("./user.routes");

const registerRoutes = (app) => {
    app.use("/api/user", userRouter);
    // app.use("api/auth/", )

    
}


module.exports = registerRoutes;
