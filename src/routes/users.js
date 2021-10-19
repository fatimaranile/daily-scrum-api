const user = require("../controller/users.js");
var router = require("express").Router();

// create new user
router.post("/signup", user.create);
// update user
router.put("/:id", user.update);

module.exports = router;