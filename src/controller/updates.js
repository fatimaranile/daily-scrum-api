const db = require("../models");

const Update = db.updates;

function addUpdate(req, res) {
    const { scrumUpdate } = req.body;
    if (!scrumUpdate ) {
        res.status(400).send({
            success: false,
            message: "Daily update cannot be empty.",
        });

        return;
    }

    Update.create(req.body)
        .then((data) => {
            res.send({
                success: true,
                data,
            })
        })
        .catch((err) => {
            res.status(400).send({
                success: false,
                message: err.message || "An error occured while saving your update.",
            })
        })
}

module.exports = {
    addUpdate,
}