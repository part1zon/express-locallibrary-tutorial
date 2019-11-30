var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//test for new path users/cool
router.get('/cool', function(req, res, next) {
  res.send('Mergen Delger chi chadaj bn');
});

module.exports = router;
