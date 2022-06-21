// let fs = require("fs");

// let rs = fs.createReadStream("events/demo.txt");

// rs.on("open",()=>console.log("File is open"));

// rs.on("close",()=>console.log("File is closed"));

// rs.close();

const log = console.log;

let events = require("events");

// log(events);

// let add =  function (a,b){
//     log(`Addition function executed`);
// }

// let eventEmitter = new events.EventEmitter();

// eventEmitter.on("addition",add);

// eventEmitter.emit("addition");

let listener1 = ()=>log(`Listener-1 Executed`);
let listener2 = ()=>log(`Listener-2 Executed`);

let eventEmitter = new events.EventEmitter();
// eventEmitter.on("connection",listener1);
eventEmitter.addListener("connection",listener1);
eventEmitter.on("connection",listener2);

eventEmitter.emit("connection");

eventEmitter.removeListener("connection",listener1);
log("Remove listener-1");

eventEmitter.emit("connection");