import pool from "../configs/connectDB"

let getHomepage = async(req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users` ');
    // let check = await pool.execute('SELECT * FROM `users` ');
    // console.log(check[0]);
    return res.render("index.ejs", { dataUser: rows, test: "string abcs" })
}

let getDetailPage = async(req, res) => {
    let userid = req.params.id;
    let user = await pool.execute('select * from users where id = ? And firstName = ?', [userid, 'Pham']);
    // console.log('check request params', user)
    return res.send(JSON.stringify(user[0]))
}
module.exports = {
    getHomepage,
    getDetailPage
}