function greet(name){
    
    // let msg;
    if(name == "Jai"){
        var a = 100;
        msg = "Welcome " + name;
    }else{
        msg = "Hello " + name;
    }

    console.log(msg)
    console.log(a);
}

// greet("Jai");

function hoist(){
    var a = 100;
     b = 5000;
    console.log("function hoist");
    console.log("Value of the a variable is "+a);
    console.log("Value of the b variable is "+b);
}

hoist();

console.log(b);