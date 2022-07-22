const log = console.log;

let mongodb = require("mongodb");

let MongoClient = mongodb.MongoClient;

let url = "mongodb://127.0.0.1:27017";

MongoClient.connect(url,{useUnifiedTopology:true},(err,db)=>{
    if(err){
        log(err);
    }else{
        log("Connection Success");

        let dbo = db.db("hello2");

        let employee = {
            id:3,
            ename: "Isai",
            ecity: "Concha",
            esalary: 4000
        }

        // dbo.collection("employees").insertOne(employee,(err,result)=>{
        //     if(err){
        //         log(err);
        //     }else{
        //         log(result);
        //         db.close();
        //     }
        // });

        let employees = [
            {
                eid:01,
                ename: "Waldo",
                ecity: "Where",
                esalary: 2540
            },
            {
                eid:02,
                ename: "Oscar",
                ecity: "Bismuto",
                esalary: 2000
            },
            {
                eid:03,
                ename: "Broca",
                ecity: "Turskein",
                esalary: 1000
            },
        ];

        dbo.collection("employees").insertMany(employees,(err,result)=>{
            if(err){
                log(err);
            }else{
                log(result);
                db.close();
            }
        });
        
    }
});