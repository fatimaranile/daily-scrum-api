const User = (sequelize, Sequelize) => {
  return sequelize.define("user", {
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    token: {
      type: Sequelize.STRING,
    },
  });
};

module.exports = User;
