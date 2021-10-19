module.exports = (app) => {
    const userRoute = require("./users.js");

    app.use("/api/v1/user", userRoute);
}