const pool = require("../../db/db");

//Signup 버튼을 눌렀울 때 회원가입(signup) 페이지 이동  
exports.GET_SIGNIN = async (req, res) => {
    try {
        return res.render("index", {
            page: "user/signup",
        });
    } catch (error) {
        console.log(error);
    }
}

//login 버튼을 눌렀울 때 로그인(signin) 페이지 이동  
exports.GET_SIGNUP = async (req, res) => {
    try {
        return res.render("index", {
            page: "user/signin",
        });
    } catch (error) {
        console.log(error);
    }
}

// 회원가입
exports.SIGNUP = async (req, res) => {
    try {
        let { user_email, user_password, user_name, user_nickname, user_phone } = req.body;
        // USER_EMAIL 중복 확인 
        const uemail_dup_chk = await pool.query("SELECT * FROM `solo-project`.new_table WHERE user_email = ?", [
            user_email
        ]);

        if (uemail_dup_chk[0].length === 0) {
            // 회원가입 가능
            const signup = await pool.query("INSERT INTO `solo-project`.new_table VALUES(?, ?, ?, ?, ?)", [
                user_email, user_password, user_name, user_nickname, user_phone
            ]);
            return res.send('<script>alert("회원가입이 되었습니다."); location.href="/";</script>');
        } else {
            return res.send('<script>alert("중복된 이메일입니다."); location.href="/";</script>')
        }
    } catch (error) {
        console.log(error);
    }
}

// 로그인 버튼 눌렀을 때
exports.LOGIN = async (req, res) => {
    try {
        let { user_email, user_password } = req.body;
        const select_id = await pool.query("SELECT * FROM `solo-project`.new_table WHERE user_email = ? AND user_password = ?", [
            user_email, user_password
        ]);

        if (select_id[0].length === 0) {
            // 로그인 안됨
            return res.send('<script>alert("로그인 정보를 확인해주세요!"); location.href="/";</script>'); 
        } else {
            return res.send('<script>alert("로그인 되었습니다!"); location.href="/";</script>');
        }
    } catch (error) {
        console.log(error);
    }
}