const log=console.log;

let mongodb = require("mongodb");

let MongoClient = mongodb.MongoClient;

let url = "mongodb://127.0.0.1:27017";

MongoClient.connect(url,(err,db)=>{
    if(err){
        log("ERROR: "+err);
    }else{
        log("Connection Success");
        let dbo = db.db("hello");

        // dbo.createCollection("trainers",function(err,result){
        //     if(err){
        //         log(err);
        //     }else{
        //         log("Employees Collection has been created.");
        //         db.close();
        //     }
        // });

        // dbo.collection("trainers").drop((err)=>{
        //     if(err){
        //         log(err);
        //     }else{
        //         log("Collection has been removed");
                
        //     }
        //     db.close();
        // });

        dbo.dropDatabase(()=>{
            log("Database hello dropped successfully");
        });

        db.close();
        
    }
});