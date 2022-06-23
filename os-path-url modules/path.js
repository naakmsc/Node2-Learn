const log = console.log;

let path = require("path");

let p1 = "http://jai/contact/contact.html";

log(`Path Name: ${path.basename(p1)}`);
// log(`Delimiter: ${path.delimiter(p1)}`);
log(`Directory Name: ${path.dirname(p1)}`);
log(`Extension: ${path.extname(p1)}`);
log(`Is Absolute: ${path.isAbsolute(p1)}`);

let p2 = "/contact";
let p3 = "/form.html";
log(`Path: ${path.join(p2,p3)}`)