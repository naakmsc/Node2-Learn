const log = console.log;

let moment = require("moment");

let logger = (req,res,next) => 
{
    log(`${req.protocol}://${req.get("host")} ${req.originalUrl} : ${moment().format()}`);
    next();
}

module.exports = logger;