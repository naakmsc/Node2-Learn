const log = console.log;

let os = require("os");

// log(os);

log(`OS Architecture: ${os.arch()}`);
log(`Platform: ${os.platform()}`);
log(os.release());
log(`Total Memory: ${os.totalmem()}`);
log(`Free Memory: ${os.freemem()}`);
log(`Home Directory: ${os.homedir}`);
log(`Temparary Directory: ${os.tmpdir}`);
log(`Host: ${os.hostname()}`);