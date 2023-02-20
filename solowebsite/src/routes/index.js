//-----------------------------------
//지혜가 설명해준 클린 코딩
//원래 app.js에서 userRoute와 indexRoute를 따로 선언해서 폴더 routes라는 걸 만들어서 따로 작업해야했음
//그런데 index.js즉 라우터에서 이렇게 하면 route라는 폴더가 의미가 없어짐 그리고 users라는 라우터가 필요 없음
// var express = require('express');
// var router = express.Router();

// const mainRoute = require('./home')
// const userRoute = require('./user')

// router.use('/', mainRoute)
// router.use('/user', userRoute)

// module.exports = router;
//-------------------------------------


var express = require("express");
var router = express.Router();

// 컨트롤러
const indexController = require("../controllers/indexController");

/* GET home page. */
router.get("/", indexController.GET_MAIN);


module.exports = router;
