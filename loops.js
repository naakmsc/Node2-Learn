let log = console.log;

let employeeNames  = ["oscar","carlos","ana","jairo","amanda","roger","luis"];


log("Processing elements of array using for ... of loop");

for(let name of employeeNames){
    // log(name);
}

let data = {
    id: 1,
    name: "jairo",
    age: "33"
}

let datas= [
    {id:1,name:"jairo"},
    {id:2,name:"oscar"},
    {id:3,name:"ana"},
    {id:4,name:"luis"},
    {id:5,name:"carlos"},
    {id:6,name:"joan"}
];

// log(datas)

for(let e of datas){
    // log(`ID: ${e.id} Name: ${e.name}`);
    for(let f in e){
        log(e[f]);
    }
}


// log(employeeNames[0]);
// log(employeeNames[1]);
// log(employeeNames[2]);
// log(employeeNames[3]);

for(let i=0; i < employeeNames.length;i++){
    // log(employeeNames[i]);
}

// log("Displaying Employee Names using for ... in loop");

for(let name in employeeNames){
    // log(employeeNames[name]);
}

let employee ={
    eid:1,
    ename: "Kai",
    ecity: "Kambolla"
}

// log(employee);

// log(`Employee ID: ${employee.eid}`);
// log(`Employee Name: ${employee.ename}`);
// log(`Employee City: ${employee.ecity}`);

// log("Display object values one by one using FOR ... in loop");

for(let e in employee){
    // log(employee[e]);
}