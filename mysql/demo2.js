const log = console.log;

let mysql = require("mysql");

let dbDetails = {
    host:"localhost",
    user: "root",
    password: "",
    database: "company"
};

let connection = mysql.createConnection(dbDetails);

// log(connection);

//conection open
connection.connect((err)=>
{
    if(err)
    {
        log("Erro Conection: "+err);
    }else
    {
        log("Connection established");

        // let databaseName = "company";
        // let createDatabase = `create database ${databaseName}`;
        // let dropDatabase = `drop database ${databaseName}`;

        let tableName = "trainees";
        // let createTable = `create table ${tableName} (id int primary key auto_increment, fname varchar(50), lname varchar(50), course varchar(50),email varchar(50))`;
        // let dropTable = `drop table ${tableName}`;
        let insertQuery = `insert into ${tableName} values(null,"Norma","Lopez","Tecnlogias web","norma@gmail.com")`;

        let deleteQuery = `delete from ${tableName} where id=3`;

        let updateQuery = `update ${tableName} set course="React" where id = 4`;

        let selectQuery = `select * from ${tableName} where id=5`;

        connection.query(insertQuery,(err,result)=>
        {
            if(err){
                log(`Error to create Database ${err}`);
            }
            else
            {
                // for(let file of result){
                //     log("--------------------------------");
                //     log(`Trainees ID: ${file.id}`);
                //     log(`Trainees First Name: ${file.fname}`);
                //     log(`Trainees Last Name: ${file.lname}`);
                //     log(`Trainees Email: ${file.email}`);
                //     log(`Trainees Course: ${file.course}`);
                // }
            }
        });
    }

    connection.end(function(err)
    {
        if(err)
        {
            log("Error Connection: "+err)
        }
        else
        {
            log("Connection has been closed");
        }
    });
});