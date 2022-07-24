const log = console.log;
let mysql = require("mysql");

let dbDetails = 
{
    host: "localhost",
    user: "root",
    password: "",
    database: "company"
};

let connection = mysql.createConnection(dbDetails);

let selectQuery = "select * from trainees order by id desc limit 3";

connection.connect(err=>
    {
        if(err){
            log(err);
        }
        else
        {
            log(`Connection established`);
            connection.query(selectQuery,(err,result,fields)=>
            {
                if(err)
                {
                    log(err);
                }
                else
                {
                    for(const trainee of result)
                    {
                        log("---------------------------");
                        log(`Trainee ID: ${trainee.id}`);
                        log(`Trainee First Name: ${trainee.fname}`);
                        log(`Trainee Last Name: ${trainee.lname}`);
                        log(`Trainee Email: ${trainee.email}`);
                        log(`Trainee Course: ${trainee.course}`);
                    }
                }
            });
        }

        connection.end();
    });