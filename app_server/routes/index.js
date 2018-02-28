var express = require('express');
var router = express.Router();
var mainCtrl = require("../Controllers/main")
var dkpTableCtrl = require("../Controllers/dkpTable");
var dkpScoreCtrl = require("../Controllers/dkpScore");

/* GET home page. */
router.get('/', dkpTableCtrl.index);
router.get('/dkpTable', dkpScoreCtrl.index);

module.exports = router;
