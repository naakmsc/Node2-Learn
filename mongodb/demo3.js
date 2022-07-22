const log = console.log;

let mongodb=require("mongodb");

let mongoClient = mongodb.MongoClient;

let url ="mongodb://127.0.0.1:27017";

mongoClient.connect(url,(err,db)=>{
    if(err){
        log(err);
    }else{
        log("Connection Successfully");
""
        let dbo = db.db("hello2");

        // dbo.collection("employees").findOne({},(err, result)=>{
        //     if(err){
        //         log(err);
        //     }else{
        //         log(result);
        //         db.close();
        //     }
        // });

        // dbo.collection("employees").find({/*ecity:"Where"*/},{projection:{city:0}}).sort({eid:-1}).toArray((err,result)=>{
        //     if(err){
        //         log(err);
        //     }else{
        //         for(employee of result){
        //             log("----------------------------------");
        //             log(`Employee ID: ${employee.eid}`);
        //             log(`Employee Name: ${employee.ename}`);
        //             log(`Employee City: ${employee.ecity}`);
        //             log(`Employee Salary: ${employee.esalary}`);    
        //         }
        //         db.close();
        //     }
        // });

        dbo.collection("employees").deleteOne({ename:"Marlon Brandom"},(err,result)=>{
           if(err){
            log(err);
           }else{
            log(result.deletedCount+` Document Deleted`);
            db.close();
           }
        });

        
    }
});