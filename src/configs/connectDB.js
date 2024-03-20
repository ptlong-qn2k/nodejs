import mysql from 'mysql2/promise';

// Create the connection to database
console.log("creating connectin pool...");

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic',
    // password:'password'
});

export default pool