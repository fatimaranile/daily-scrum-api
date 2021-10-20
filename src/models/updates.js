const Updates = (sequelize, Sequelize) => {
    return sequelize.define("updates", {
      scrumUpdate: {
        type: Sequelize.STRING,
      },
      blocker: {
        type: Sequelize.STRING,
      },
    });
  };
  
module.exports = Updates;