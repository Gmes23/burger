var express = require('express');
var router = express.Router();
var burger = require('../models/burgers.js');

router.get('/', function (req, res) {
  res.redirect('/burgers');
});

router.get('/burgers' function (req, res) {
  burger.all(function (data) {
    res.render('index', {burgers: data});
  });
});

router.post('/burgers/create', function (req, res) {
  burgers.create();
  res.redirect('/burgers');
});

router.put('/burgers/update/:id', function (req, res) {
  burger.update({ devoured: req.body.eatBurger});
  res.render('/burgers');
});

module.exports = router;
