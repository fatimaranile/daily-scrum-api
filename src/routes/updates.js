const update = require("../controller/updates.js");
var router = require("express").Router();

// submit daily update
router.post("/save", update.addUpdate);
// edit daily update
router.put("/:id", update.editUpdate);

module.exports = router;