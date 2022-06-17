//How using parameters
let log = console.log;
function add(a=5,b=9){
    log("Value of a "+a);
    log("Value of b "+b);
}

// add(10);
// add(10,8);
// add();


function displayEmployesNames(title, ... employesNames) //Rest Parameters
{
    log(title);
    // log(typeof employesNames);
    // log(Array.isArray(employesNames));

    for(let employeeName of employesNames){
        log(employeeName);
    }
}

const title = "Display Employee Names";

let employeeNames = ["Jairo","Isai","Oscar","Ana","Mimosa"];

displayEmployesNames(title,... employeeNames); //SPREAS Operator

// displayEmployesNames(title,"Jai");
// displayEmployesNames(title,"Jai","oscar");
// displayEmployesNames(title,"Jai","oscar","ana");