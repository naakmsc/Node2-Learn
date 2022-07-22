const log = console.log;

let mongoose = require("mongoose");

let url = "mongodb+srv://admin:1234@cluster0.olifim4.mongodb.net/nodito?retryWrites=true&w=majority";

mongoose.connect(url);

let db = mongoose.connection;

db.on("error",console.error.bind(console,"Connectoin Error!!!"));

db.once("open",()=>{
    log("Connections Success");
});

let employeeSchema = mongoose.Schema({
    ename: String,
    ecity: String,
    esalary:Number
});

let Employee = mongoose.model("Employee",employeeSchema,"employees");

let employee1 = new Employee({ename:"Jai",ecity:"Cambolla",esalary:2530.14});

// employee1.save((err,docs)=>
// {
//     if(err){
//         log(err);
//     }else{
//         log(`${docs.ename} document inserted successfully in collections employees`);
//         db.close();
//     }
// });


let employees = [
    {ename:"Oscar",ecity:"Durska",esalary:4500,edoj:"10-10-2022"},
    {ename:"Ines",ecity:"Rusia",esalary:500,edoj:"09-05-2022"},
    {ename:"Ana",ecity:"Concha",esalary:1000,edoj:"01-09-2022"},
    {ename:"Douglas",ecity:"Pepeto",esalary:2140},
    {ename:"Tito",ecity:"Chongo",esalary:3560},
    {ename:"Gay",ecity:"LGTb",esalary:40}
];

Employee.collection.insertMany(employees,(err,result)=>{
    if(err){
        log(err);
    }else{
        log(`${result.insertedCount} documents inserted`);
        db.close();
    }
});