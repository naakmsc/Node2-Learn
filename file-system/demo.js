const log = console.log;

let fs = require("fs");

////Read Files Example
////Synchronous mode
// let data = fs.readFileSync("file-system/sample.txt","utf-8");
// log(data);
////Asynchronous mode
// fs.readFile("file-system/sample.txt","utf-8",(err,data)=>{
//     if(err){
//         log(err);
//     }else{
//         log(data);
//     }
// });

// log("Welcome to Node JS by Jai");
// log("Welcome to PHP by Jai");



////Read File Example
////Synchronous mode
// fs.writeFileSync("file-system/sample.txt","Wellcome to PHP by Jai");
////Asynchronous mode
// fs.writeFile("file-system/sample1.txt","Wellcome to HTML by Jai",()=>log("Data written to file successfully"));

// log("code executed after completing write operation");



// //Read File and Write them later
// fs.readFile("file-system/sample.txt","utf-8",(err,data)=>{
//     if(err){
//         log("+++++++++"+err);
//     }else{
//         fs.readFile("file-system/sample3.txt","utf-8",(error,datas)=>{
//             if(error){

//             }else{
//                 log("Read Operation Completed");
//                 fs.writeFile("file-system/sample3.txt",(datas+="\n"+data),()=>log("Write Operation is Completed"));
//             }
//         });
        
//     }
// });


////Delete files 
////Synchronous mode
// fs.unlinkSync("file-system/sample3.txt");
// log("File sample3.txt deleted successfully");

////Asynchronous mode
// fs.unlink("file-system/sample1.txt",(err)=>{
//     if(err){
//         log("++++++"+err);
//     }else{
//         log("File sample1.txt deleted successfully");
//     }
// });




////Create folders 

////Synchronous mode
// let s1 = fs.mkdirSync("Empty Folder");

////Asynchronous mode
// fs.mkdir("Empty Folder 2",(err)=>{
//     if(err){
//         log("+++++"+err);
//     }else{
//         log("Folder has been created successfully");
//     }
// });

////Asynchronous mode with file included

// fs.mkdir("Bnode",(err)=>{
//     if(err){
//         log("+++"+err);
//     }else{
//         fs.writeFile("Bnode/sample4.txt","Welcome to  Bnode by Jai",(error)=>{
//             if(error){
//                 log("-----"+error);
//             }else{
//                 log("File sample4.txt has beed created successfully");
//             }
//         });
//         log("Folder Bnode has been Created");
//     }
// });



////Delete folder 

////Synchronous mode
// fs.rmdirSync("Empty Folder");

////Asynchronous mode
// fs.rmdir("Empty Folder 2",(err)=>{
//     if(err.){
//         log("+++++"+err);
//     }else{
//         log("Folder deleted successfully");
//     }
// });

// fs.unlink("Bnode/sample4.txt",(err)=>{
//     if(err){
//         log("----"+err);
//     }else{
//         log("File has bee removed");
//     }
// });
// fs.rmdir("Bnode",(err)=>{
//     if(err){
//         log("+++++"+err);
//     }else{
//         log("Folder deleted successfully");
//     }
// });





// //Reanem files
// //Synchronous mode
// fs.renameSync("file-system/demo.txt","file-system/sample.txt");

//Asynchronous mode
// fs.rename("file-system/sample.txt","file-system/demo.txt",(err)=>{
//     if(err){
//         log("++++"+err);
//     }else{
//         log("Rename has been modified");
//     }
// });



////Know about metadatas of a file or directory
// fs.stat("file-system/sample.txt",(err,stats)=>{
//     if(err){
//         log("++++"+err);
//     }else{
//         // log(stats);
//         log(` Is File: ${stats.isFile()}`);
//         log(`Is Directory: ${stats.isDirectory()}`);
//     }
// });




//Open files 
fs.open("file-system/sample.txt","r",(err,fd)=>{
    if(err){
        log("++++"+err);
    }else{
        log("File has been opened");
        fs.readFile(fd,"utf-8",(error,data)=>{
            if(error){
                log("----"+error);
            }else{
                log(data);
            }
        });
    }
});