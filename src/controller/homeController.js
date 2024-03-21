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
let createNewUser = async(req, res) => {
    console.log('>>check req:', req.body);
    // let { firstName, lastName, email, address } = req.body
    let firstName = req.body.firstName;
    let lastName = req.body.lastName
    let email = req.body.email
    let address = req.body.address
    await pool.execute('insert into users(firstName, lastName, email,address) VALUES(?,?,?,?)', [firstName, lastName, email, address])
    return res.redirect('/') //post du lieu xong ve trang home
}
module.exports = {
    getHomepage,
    getDetailPage,
    createNewUser
}