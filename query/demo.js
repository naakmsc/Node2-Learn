const log = console.log;

const querystring = require("querystring");
const http = require("http");
const fs = require("fs");
const mysql = require("mysql");

let dbDetails={
    host: "localhost",
    user:"root",
    password:"",
    database:"node2"
};

// let q = "fname=jai&lname=gautier&city=cambolla";

// let obj = querystring.parse(q);
// log(obj);

// let employee = {
//     fname : "jai",
//     lname : "gautier",
//     city : "cambolla"

// };

// log(employee);

// let qs = querystring.stringify(employee);

// log(qs);
let PORT = 3000;
let server = http.createServer((req,res)=>
{
    if(req.url=="/contact" && req.method=="GET")
    {
        fs.createReadStream("query/public/contact.html").pipe(res);
    }
    else if(req.url == "/contact" && req.method == "POST")
    {

        let connection = mysql.createConnection(dbDetails);

        connection.connect(err=>{
            if(err){
                log(err);
            }
            else
            {
                log("Connection Established");
            }
        });

        req.on("data",(data)=>{
            let form = querystring.parse(data.toString());
            let {fname, lname, city} = form;

            let insertQuery = `insert into enquiry (fname,lname,city) values('${fname}','${lname}','${city}')`;
            connection.query(insertQuery,(err,result)=>{

                if(err){
                    log("DB err:"+err);
                }else{
                    // log(`First Name: ${fname}`);
                    // log(`Last Name: ${lname}`);
                    // log(`City: ${city}`);

                    res.writeHead(200,"OK",{"context-type":"text/html"});
                    res.end(`Thanks for Contacting me dear ${fname}`);
                }
                
            });
            
            connection.end();
        });

        
    }
});

server.listen(PORT,()=>log(`Server Listening on port ${PORT}`));