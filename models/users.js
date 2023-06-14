const Sequelize = require("sequelize");
const db = require("../config/database");

const Users = db.define("Users", {
    username: {
        type: Sequelize.STRING,
    },
    lastName: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
        validate: {
            is: /^[0-9a-f]{64}$/i,
        },
    },
    role: {
        type: Sequelize.STRING,
    },
    avatar: {
      type: Sequelize.STRING
  }
});

module.exports = Users;
