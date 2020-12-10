var express = require('express');
var router = express.Router();
const Controller = require("../controller/controller")

/* GET home page. */
router.get('/', Controller.home);

module.exports = router;