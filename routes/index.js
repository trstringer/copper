var express = require('express');
var router = express.Router();
const packageConfig = require('../package');
const os = require('os');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(packageConfig.version);
  res.render('index', {
    title: 'Copper',
    version: packageConfig.version,
    hostname: os.hostname()
  });
});

module.exports = router;
