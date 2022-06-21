
//Example 1
// let a = 50;

// let add = (a,b)=>a+b;

// let employee={
//     eid:1,
//     ename:"Jai"
// }

// module.exports.a = a;
// module.exports.add = add;
// module.exports.employee = employee;

//Example 2
// module.exports.a = 50;

// module.exports.add = (a,b)=>a+b;

// module.exports.employee={
//     eid:1,
//     ename:"Jai"
// }

//Example 3
let a = 50;

let add = (a,b)=>a+b;

let eid = 1;
let ename = "Jairo";

let employee={
    eid:eid,
    ename:ename
}

module.exports = {
    a:a,
    add:add,
    employee:employee
}