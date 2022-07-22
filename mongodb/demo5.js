const log = console.log;

let http = require("http");
let fs = require("fs");
const querystring = require("querystring");
let mongodb = require("mongodb");


let mongoClient = mongodb.MongoClient;

let url = "mongodb://127.0.0.1:27017";

const PORT= 4000;
let server = http.createServer((req,res)=>
{
    if(req.url == "/" || req.url=="/home")
    {
        fs.createReadStream("mongodb/public/home.html").pipe(res);
    }
    else if(req.url == "/training")
    {
        fs.createReadStream("mongodb/public/training.html").pipe(res);
    }
    else if(req.url == "/about")
    {
        fs.createReadStream("mongodb/public/about.html").pipe(res);
    }
    else if(req.url == "/contact" && req.method.toLowerCase() == "get")
    {
        fs.createReadStream("mongodb/public/contact.html").pipe(res);    
    }else if(req.url == "/contact" && req.method.toLowerCase() == "post")
    {
        res.writeHead(200,"OK",{"content-type":"text/html"});
        log("Form Data has been sended");
        fs.createReadStream("mongodb/public/contact.html").pipe(res);

        req.on("data",(chunk)=>
        {
            let form = querystring.parse(chunk.toString());

            mongoClient.connect(url,(err,db)=>
            {
                if(err){
                    log(err);
                }else{
                    let dbo = db.db("hello2");
                    dbo.collection("enquiries").insertOne(form,(err,result)=>{
                        if(err){
                            log(err);
                        }else{
                            log(result);
                        }
                    });
                }
            });

            log(form);
        });
    }
    else if(req.url == "/login" && req.method.toLowerCase() == "get")
    {
        fs.createReadStream("mongodb/public/login.html").pipe(res);
    }
    else if(req.url == "/login" && req.method.toLowerCase() == "post")
    {
        req.on("data",(chunk)=>{
            let form = querystring.parse(chunk.toString());
            
            mongoClient.connect(url,(err,db)=>{
                if(err){
                    log(err);
                }else{
                    let dbo = db.db("hello2");

                    let loginAuthentication={
                        $and:[{email:form.email},{password:form.password}]
                    };

                    dbo.collection("users").findOne(loginAuthentication,(err,result)=>{
                        if(err){
                            log(err);
                        }else{
                            if(result){
                                log(result.email);
                                res.writeHead(200,"OK",{"content-text":"text/html"});
                                res.end("<h2>Login Successfully!!!</h2>");
                            }else{
                                res.writeHead(404,"OK",{"content-text":"text/html"});
                                fs.createReadStream("mongodb/public/login.html").pipe(res);
                                log("<h2>Erro Data</h2>");
                                
                            }
                        }
                    });
                }
            });
        });
    }
    else if(req.url == "/signup" && req.method.toLowerCase() == "get")
    {
        fs.createReadStream("mongodb/public/signup.html").pipe(res);
    }
    else if(req.url == "/signup" && req.method.toLowerCase() == "post")
    {
        res.writeHead(200,"OK",{"content-text":"text/html"});
        fs.createReadStream("mongodb/public/signup.html").pipe(res);

        req.on("data",(chunk)=>{
            let form = querystring.parse(chunk.toString());

            mongoClient.connect(url,(err,db)=>{
                if(err){
                    log(err);
                }else{
                    let dbo = db.db("hello2");
                    dbo.collection("users").insertOne(form,(err,result)=>{
                        if(err){
                            log(err);
                        }else{
                            log(`Registration done.`);
                        }
                        db.close();
                    });
                }
            });
        });

    }
});

server.listen(PORT,()=>log(`Server listening on PORT ${PORT}`));