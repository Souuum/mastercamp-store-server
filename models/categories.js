const Sequelize = require("sequelize");
const db = require("../config/database");

const Categories = db.define("Categories", {
    name: {
        type: Sequelize.STRING,
    },
});

module.exports = Categories;
