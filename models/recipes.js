const Sequelize = require("sequelize");
const db = require("../config/database");

const Recipes = db.define("Recipes", {
    title: {   type: Sequelize.STRING,
    },
    content: {
        type: Sequelize.STRING,
    },
    time: {
        type: Sequelize.STRING,
    },
    video: {
        type: Sequelize.BOOLEAN,
    },
    ingredients: {
      type: Sequelize.STRING,
    }
});

module.exports = Recipes;
