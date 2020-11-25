var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "minhducadmin"

});

//Insert data for SQL
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected");
    var sql = "INSERT INTO student VALUES ('PH0001','CONNECTED NODEJS','MOB')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Insert thanh cong");

    });

});

/**
 * 1: start xampp Apache va mySQL
 * 2: tạo package.json, thực hiện lệnh: "npm init"
 * 3: Them thu vien mySQL : "npm install mysql"
 * 4: code nhu tren va chay file node insert.js
 * 5: truy cap http://localhost:81/phpmyadmin vao SQL de xem thay doi 
 */


