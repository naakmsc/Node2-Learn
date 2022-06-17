// add(50,90);

// function add(firstNumber,secondNumber){
//     let result = firstNumber + secondNumber;
//     console.log("Addition is "+result);
// }

// add(10,90);

let log = console.log;

// let add = function(firstNumber, secondNumber){
//     let result = firstNumber + secondNumber;
//     log("Addition is "+result);
// }

// add(30,41);

// function mul(firstNumber,secondNumber){
//     let result = firstNumber * secondNumber;
//     log("Multiplication "+result);
// }
// mul(41,12)

let sub = (function(firstNumber,secondNumber){
    let result = firstNumber - secondNumber;
    log("Substraction is "+result);
});

// sub(120,52);

let add1=(n1,n2)=>{
    let result = n1+n2;
    log("Addition is "+result);
}

// add1(5,40);

function display(){
    log("Display() normal function");
}

// display();

let display1 = (a) => log("display() arrow function "+a);
// display1(25);

function double(n){
    return n*2;
}

// log("Result "+double(25));

let result = (n) => n*2;

log("Result "+result(25));

let d = new Date();
setInterval(()=>{
    log("Current Date and Time is "+d);
},1000);