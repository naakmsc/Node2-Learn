const log = console.log;

let url = require("url");

let u = "http://www.google.com/images.html?user=jai&pass=hello&mobile=25254040";

let p = url.parse(u,true);

log(p);
log(`Host name: ${p.hostname}`);
log(`Path: ${p.path}`);
log(`Pathname: ${p.pathname}`);
log(`Protocol: ${p.protocol}`);
log(p.search);
log(p.query);
log(p.href);
log(`Username: ${p.query.user}`);
log(`Password: ${p.query.pass}`);
log(`Number Phone: ${p.query.mobile}`);