const log = console.log;

let mysql = require("mysql");

let dbDetails = {
    host:"localhost",
    user:"root",
    password:""
};

let connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:""
});

connection.connect(function(err){
    if(err){
        log(err);
        log(`Problem with databasse connection`);
    }else{
        log("Connection Established Successfully");
    }

    connection.end(function(err){
        if(err){
            log("Problem with database connection");
        }else{
            log("Connection has been closed");
        }
    });
});