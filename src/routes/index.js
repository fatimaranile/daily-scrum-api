module.exports = (app) => {
    const userRoute = require("./users.js");
    const updateRoute = require("./updates.js");

    app.use("/api/v1/user", userRoute);
    app.use("/api/v1/updates", updateRoute);
}