var express = require('express');
const { getUsers, getTasks } = require('../controllers/controller');
const authorize = require('../middleware')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<p>Welcome to task Management App</p>');
});

router.get('/:userId/users', authorize(['admin']), getUsers);
router.get('/:userId/tasks', authorize(['manager','admin']), getTasks);


module.exports = router;