var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "minhducadmin"

});

//Read data for SQL
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected");
    con.query("SELECT * FROM student", function (err, rows, columns) {
        if (err) throw err;


        //lay data tra ve json
        var objs = [];
        for (var index = 0; index < rows.length; index++) {
            objs.push({ IDSTUDENT: rows[index].IDSTUDENT });
            objs.push({ NAMESTUDENT: rows[index].NAMESTUDENT });
            objs.push({ IDCLASS: rows[index].IDCLASS });
        }
        con.end();
        console.log(JSON.stringify(objs));

        // console.log(rows);
        console.log("Read thanh cong");
        
    });

});

/**
 * 1: start xampp Apache va mySQL
 * 2: tạo package.json, thực hiện lệnh: "npm init"
 * 3: Them thu vien mySQL : "npm install mysql"
 * 4: code nhu tren va chay file node read.js
 * 5: truy cap cmd de xem thay doi
 * dong 18-24 de chuyen data thanh json
 */