/*
    Response Status Codes
    100 - 199 : Info
    200 - 299 : Success
    300 - 399 : Redirection
    400 - 499 : Incomplete WebResource Program
    500 - 599 : Server Failure
*/
let log = console.log;
let http = require("http");
const PORT = 3000;

let server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>Welcome to Mi Trabajito</h1>");
    res.write("<h2>"+req.url+"</h2>");
    res.end();
});

server.listen(PORT,()=>log(`Server listening on Port: ${PORT}`));