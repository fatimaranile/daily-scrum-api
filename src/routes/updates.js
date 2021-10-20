const update = require("../controller/updates.js");
var router = require("express").Router();

// submit daily update
router.post("/save", update.addUpdate);

module.exports = router;