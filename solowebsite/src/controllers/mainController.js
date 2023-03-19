const pool = require("../../db/db");

exports.MAIN = async (req, res) => {
    try {
        const getBooks = await pool.query("SELECT * FROM book");
        return res.render("index", {
            page: "main/main",
            books: getBooks[0],
        });
    } catch (error) {
        console.log(error);
    }
}
