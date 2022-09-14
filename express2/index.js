const log = console.log;

const { application } = require("express");
let express = require("express");
let path = require("path");

let router = require("./api");

let app = express();

const PORT = 5000;



app.use(express.static(path.join(__dirname,"public")));



app.use(router);







// app.get("/",(req,res)=>
// {
//     res.sendFile(path.join(__dirname,"public","index.html"));
// });

app.listen(PORT,()=>log("Server Listening!!!"));