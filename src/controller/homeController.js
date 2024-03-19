import connection from "../configs/connectDB"
let getHomepage = (req,res)=>{
    //logic
    let data = [];
    connection.query(
        'SELECT * FROM `users` ',
        function (err, results, fields) {
            console.log('>>>check mysql');
            console.log(results); // results contains rows returned by server
            results.map((row)=>{
                data.push({
                id: row.id,
                email: row.email,
                address: row.address,
                firstName: row.firstName,
                lastName: row.lastName
            })});
            console.log('>>>checkdata',typeof(data),JSON.stringify(data));
            return res.render("index.ejs", {dataUser : JSON.stringify(data)}) 

        });
    
}
module.exports = {
    getHomepage
}