const http = require("http");
const fs = require("fs");
const os = require("os");

// const aa = require("./module-demo");

// console.log(aa);

const data = require("./module-demo");

console.log(typeof data);
console.log(data.a);
console.log(data.add(5,6));
console.log(`Employee ID: ${data.employee.eid}`);
console.log(`Employee Name: ${data.employee.ename}`);

console.log("Employee Object after Modification");
data.employee.eid = 2;
data.employee.ename = "oscar";

console.log(`Employee ID: ${data.employee.eid}`);
console.log(`Employee Name: ${data.employee.ename}`);