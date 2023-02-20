
var express = require('express');
var router = express.Router();

// 유저 컨트롤러
const mainCtrl = require("../controllers/mainController");


router.get("/main", mainCtrl.MAIN);



module.exports = router;