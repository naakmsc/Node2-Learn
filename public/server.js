let log = console.log;
let http = require("http");
let fs = require("fs");
let url = require("url");

const PORT = 3000;

let server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    // fs.createReadStream("public/home.html").pipe(res);
    let u = url.parse(req.url);
    
    if(u.pathname == "/home"){
        // res.writeHead(200,{"Content-Type":"text/html"});
        fs.createReadStream("public/home.html").pipe(res);
    }else if(u.pathname == "/services"){
        // res.writeHead(200,{"Content-Type":"text/html"});
        fs.createReadStream("public/services.html").pipe(res);
    }else if(u.pathname == "/contact"){
        // res.writeHead(200,{"Content-Type":"text/html"});
        fs.createReadStream("public/contact.html").pipe(res);
    }else if(u.pathname == "/about"){
        // res.writeHead(200,{"Content-Type":"text/html"});
        fs.createReadStream("public/about.html").pipe(res);
    }else{
        res.writeHead(404,{"Content-Type":"text/html"});
        res.write("<h2>Ivalid Request</h2>");
        res.end();
    }
    // let employee = {
    //     "eid": 1,
    //     "ename": "Jairo",
    //     "ecity":"cambolla"
    // };
    // res.write("Welcome again in Jai Corp.");
    // res.write(JSON.stringify(employee));

    // log(http.STATUS_CODES);
    // log(http.METHODS);

    // res.end();
});

server.listen(PORT,()=>{
    log(`Server listening in ${PORT}`);
});

module.exports =server;