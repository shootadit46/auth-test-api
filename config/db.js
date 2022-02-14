const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "auth_test",
});

db.connect((err) => {
    if (err) throw err;
    console.log("database terkoneksi dengan makmur ");
});

module.exports = db;