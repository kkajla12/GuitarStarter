var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/guitars', function(req, res) {
  res.render('guitars', { title: 'Guitars Page'});
});

router.get('/pedals', function(req, res) {
  res.render('pedals', { title: 'Pedals Page'});
});

router.get('/amps', function(req, res) {
  res.render('amps', { title: 'Amps Page'});
});

router.get('/gear', function(req, res) {
  res.render('gear', { title: 'Gear Page'});
});

module.exports = router;
