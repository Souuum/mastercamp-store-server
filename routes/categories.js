var express = require('express');
var router = express.Router();
var Categories = require("../models/categories");

/* GET Exercises listing. */
router.get('/', function (req, res, next) {
    Categories.findAll()
        .then(Categories => { res.send(Categories) })
});

router.get('/:id', function (req, res, next) {
    const id = req.params.id;

    Categories.findByPk(id)
        .then(Category => { res.send(Category) })
});

router.get('/name/:name', function (req, res, next) {
    const name = req.params.name;

    Categories.findOne({ where: { name: name } })
        .then(Category => { res.send(Category) })
});


module.exports = router;
