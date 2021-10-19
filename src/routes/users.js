const user = require("../controller/users.js");
var router = require("express").Router();

router.post("/signup", user.create);

module.exports = router;