exports.MAIN = async (req, res) => {
    try {
        return res.render("index", {
            page: "main/main",
        });
    } catch (error) {
        console.log(error);
    }
}
