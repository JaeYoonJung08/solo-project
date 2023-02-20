// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;



var express = require('express');
var router = express.Router();

// 유저 컨트롤러
const userCtrl = require("../controllers/userController");

// 로그인 라우터
router.get("/signin", userCtrl.GET_SIGNIN);

// 로그인 라우터
router.get("/signup", userCtrl.GET_SIGNUP);

//새로운 거 해보기
// router.get("/aa", userCtrl.GET_SIGNIN);


// 회원가입 라우터
// 회원가입 버튼을 눌렀을 때 실행됨
router.post("/signupdata", userCtrl.SIGNUP);

// 로그인 버튼을 눌렀을 때
router.post("/login", userCtrl.LOGIN);

module.exports = router;
