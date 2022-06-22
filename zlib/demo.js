const log = console.log;

let zlib = require("zlib");
let fs = require("fs");

// //Compress Operation
// let gzip = zlib.createGzip();

// let inp = fs.createReadStream("zlib/input.txt");

// let out = fs.createWriteStream("zlib/input.gz");

// inp.pipe(gzip).pipe(out);


//Descompress Operation

let unzip = zlib.createUnzip();

let inp = fs.createReadStream("zlib/input.gz");

let out = fs.createWriteStream("zlib/input2.txt");

inp.pipe(unzip).pipe(out);
