const log = console.log;

let mongodb = require("mongodb");

let MongoClient = mongodb.MongoClient;

let url = "mongodb://127.0.0.1:27017";

MongoClient.connect(url,(err,db)=>{
    if(err){
        log(err);
    }else{
        log("CONNECTION SUCCESSFULLY");

        let dbo = db.db("hello2");

        // dbo.collection("employees").updateOne({eid:5},{$set:{ename:"Burrox"}},(err,result)=>{
        //     if(err){
        //         log(err);
        //     }else{
        //         log(`${result.modifiedCount} Documents Modified`);
        //         db.close();
        //     }
        // });

        // dbo.collection("employees").updateMany({$and:[{esalary:{$gte:100,$lte:2000}}]},{$set:{ecity:"Russia"}},(err,result)=>{
        //     if(err){
        //         log(err);
        //     }else{
        //         log(`${result.modifiedCount} Documents modified`);
        //          db.close();
        //     }
        // });

        // dbo.collection("employees").find({}).limit(3).toArray((err,result)=>{
        //     if(err){
        //         log(err);
        //     }else{
        //         log(result);
        //         db.close();
        //     }
        // });

        dbo.collection("employees").drop((err,result)=>{
            if(err){
                log(err);
            }else{
                log(result);
            }
        });
    }
});