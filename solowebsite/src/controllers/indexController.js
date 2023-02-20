//const pool = require("../../db/db");

// 메인 화면(로그인)
exports.GET_MAIN = async (req, res) => {
  try {
    return res.render("index", {
      page: "user/signin",
    });
  } catch (error) {
    console.log(error);
  }
};

