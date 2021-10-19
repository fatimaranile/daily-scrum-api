const user = require("../controller/users.js");
var router = require("express").Router();

// create new user
router.post("/signup", user.create);
// login
router.post("/login", user.login);
// update user
router.put("/:id", user.update);

module.exports = router;