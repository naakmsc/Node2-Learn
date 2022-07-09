const log = console.log;

let http = require("http");

let fs = require("fs");

let formidable = require("formidable");

const PORT = 3000;

let server = http.createServer((req,res)=>{
    if(req.url == "/contact" && req.method.toLowerCase() == "get"){
        fs.createReadStream("upload/contact.html").pipe(res);
    }else if(req.url == "/contact" && req.method.toLowerCase() =="post"){

        let form = new formidable.IncomingForm();

        // log(form);
        form.uploadDir = "E:\\";
        log(form.uploadDir);

        form.parse(req, (err,fields,files)=>{
            if(err){
                log(err);
            }else{

                let oldPath = files.filetoupload.filepath;
                let newPath = "E:\\"+files.filetoupload.originalFilename;

                // log("E:\\data\\"+files.filetoupload.originalFilename);

                fs.rename(oldPath,newPath,()=>{
                    // log(files.filetoupload);
                    log(files.filetoupload.filepath);
                    log(files.filetoupload.originalFilename);
                    log(files.filetoupload.newFilename);

                    res.writeHead(200,"OK",{"content-type":"text-html"});
                    res.write("<h2>File Upload Successfully</h2>");
                    res.end();
                });


                
            }
        });

        
    }else{
        res.writeHead(400,"OK",{"content-type":"text-html"});
        res.write("<h3>Invalid Request</h3>");
        res.end();
    }
    // res.end();
});

server.listen(PORT,()=>{
    log("Server listening or PORT "+PORT);
});