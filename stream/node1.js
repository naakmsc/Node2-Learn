const log = console.log;

let fs = require("fs");

let rs = fs.createReadStream("stream/sample1.txt","utf-8");

let ws = fs.createWriteStream("stream/sample2.txt");

rs.on("open",()=>{
        log("File Open");
});

rs.on("data",(chunk)=>{
    log("new chunk Arrived");
    // ws.write(chunk);
    rs.pipe(ws);
});