const log = console.log;
let companyName = "Mi trabajito";
let msg ="Certified and Expert Trainers";
// let title ="Wellcome to "+ companyName + " " +msg;
let title =`Wellcome to ${companyName} ${msg}`;

let message = `Wellcome to ${companyName}, 
    This es NodeJS 
    Training by Raj`;

// log(message);

// log(title);

let employee = {
    eid:1,
    ename: "Jai",
    emails: ["jai@gmail.com","jairo@mail.com"],
    ecity: "San Salvador",

    // isSenior:function(experience){
    //     return experience >= 5;
    // }

    // isSenior:(experience)=>{
    //     return experience >= 5;
    // }

    isSenior:experience => experience >= 5,

    addrees: {
        street: "ABC Street",
        city: "Cambolla",
        state: "Hello"
    }
    
}

// //Log Employee
// log(`Employee ID: ${employee.eid}`);
// log(`Employee Name: ${employee.ename}`);
// log(`Employee Emails: ${employee.emails}`);
// log(`Employee City: ${employee.ecity}`);
// log(`Is Employee Senior? ${employee.isSenior(6)}`);
// log(`>>>displaying Employee Address<<<`);
// log(`Employee Street: ${employee.addrees.street}`);
// log(`Employee City: ${employee.addrees.city}`);
// log(`Employee State: ${employee.addrees.state}`);

let fname = "jAI";
let lname = "jairo";

//Example 1
let person = {
    fname : fname,
    lname : lname
}

// log(`Firt name: ${person.fname}`);
// log(`Last name: ${person.lname}`);

//Example 2
function createPerson(fname,lname,age){
    let fullName = fname+ " " +lname;

    return {
        fname: fname,
        lname: lname,
        fullName: fullName,
        // isSenior: function(){
        //     return age >= 55;
        // }
        isSenior: ()=>{
            return age >= 55;
        }
    }
}

let p1 = createPerson("Jairo","Gautier",56);

// log(p1);
// log(`Is Senior? ${p1.isSenior()}`)


//Examle 3

let fn = "First Name";
let ln = "Last Name";

let studen={
    [fn]: "Jairo",
    [ln] : "Gautier"
}

log(`First name: ${studen["First Name"]}`);
log(`Last name: ${studen["Last Name"]}`);