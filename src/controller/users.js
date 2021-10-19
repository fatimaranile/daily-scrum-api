const db = require("../models");

const User = db.users;

const Op = db.Sequelize.Op;

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
      res.send({ success: true, data: data });
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

exports.login = (req, res) => {
  const { email, password } = req.body;
  const condition = {
    email: { [Op.like]: `%${email}%` },
    password: { [Op.like]: `%${password}%` },
  };

  User.findAll({ where: condition })
    .then((data) => {
      if (data.length > 0) {
        res.send({ success: true, data: data[0] });
      } else {
        res.send({success: false});
      }
    })
    .catch((err) => {
      res.status(500).send({
        success: false,
        message: err.message || "Some error occured while logging in.",
      });
    });
};

exports.delete = (req, res) => {
  const { id } = req.params;

  User.destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          success: true,
          message: "User was successfully deleted!",
        });
      } else {
        res.send({
          success: false,
          message: "Deleting user is not successful.",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        success: false,
        message: err.message || "Error encountered while deleting user.",
      });
    });
};