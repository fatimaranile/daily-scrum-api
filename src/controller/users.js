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
        });
      } else {
        res.send({
          success: false,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        success: false,
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
      console.log("data::here", data);
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