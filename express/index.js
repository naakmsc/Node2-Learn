const log = console.log;

let express = require("express");
let path = require("path");
let logger = require("./middleware/logger");
let employees = require("./middleware/employees");

let app = express();

const PORT = 5000;



app.use(logger);

app.use(express.static(path.join(__dirname,"public")));



app.get("/api/employees",(req,res)=>
{
    res.json(employees);
});

// app.get("/",(req,res)=>
// {
//     res.send("<h2>Wellcome to Express JS</h2>");
// });

// app.get("/contact",(req,res)=>
// {
//     res.sendFile(path.join(__dirname,"public","contact.html"));
// });

app.listen(PORT,()=>log(`Server Listening now!!! in PORT ${PORT}`));



