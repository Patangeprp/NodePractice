const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'pagination'
    // authentication:'true'
})
connection.connect((error)=>{
    if(error) throw error;
    console.log('connected to database');
})

module.exports = connection;