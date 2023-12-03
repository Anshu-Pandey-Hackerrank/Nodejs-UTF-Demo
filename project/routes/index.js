var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<p>Welcome to task Management App</p>');
});




module.exports = router;