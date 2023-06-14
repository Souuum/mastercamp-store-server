var express = require('express');
var router = express.Router();
var Recipes = require("../models/recipes");

/* GET Recipes listing. */
router.get('/', function (req, res, next) {
    Recipes.findAll()
        .then(recipes => { res.send(recipes) })
});



module.exports = router;
