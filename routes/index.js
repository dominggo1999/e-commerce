var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  // render view , add props
  res.render('index', { title: 'Yare yare' });
});

module.exports = router;
