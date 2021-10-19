const db = require("../models");

const User = db.users;

exports.create = (req, res) => {
  // validate request
  if (!req.body.username || !req.body.password || !req.body.email) {
    res.status(400).send({
      message: "Username, password or email cannot be empty!",
    });

    return;
  }

  const user = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  };

  User.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "An error occured while creating your account.",
      });
    });
};

exports.update = (req, res) => {
  const { id } = req.params;

  User.update(req.body, { where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          success: true,
          message: "The information of the user is updated!",
        });
      } else {
        res.send({
          success: false,
          message: "Cannot update user information.",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        success: false,
        message: err.message || "Error updating user information.",
      });
    });
};