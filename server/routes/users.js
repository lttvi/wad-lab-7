var express = require('express');
var router = express.Router();

// router.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });


router.get('/info', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/registerCourse', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
