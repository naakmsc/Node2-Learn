let log = console.log;

let cities = ["El Salvador","Honduras","Guatemala","Nicaragua","Costa Rica"];

// let city1 = cities[0];
// let city2 = cities[1];
// let city3 = cities[2];
// let city4 = cities[3];
// let city5 = cities[4];
// let city6 = cities[5];

let [city1,city2,city3,city4,city5,city6="default"] = cities;

// log(city1);
// log(city2);
// log(city3);
// log(city4);
// log(city5);
// log(city6);

let person = {
    firstName: "Isai",
    lastName: "Gautier",
    gender:"Female",
    email: "isai@mail.com",
    mobile: "0000-0000"
}

// let fname = person.fname;
// let lname = person.lname;
// let gender = person.gender;

// let {firstName:fn,lastName:ln,gender="Male"} = person;
let {firstName:fn,lastName:ln, gender, ... data} = person;

log(`First Name: ${fn}`);
log(`Last Name: ${ln}`);
log(`Gender: ${gender}`);
log(data);
log(typeof data);
log(Array.isArray(data));