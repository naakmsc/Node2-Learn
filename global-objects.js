let log = console.log;

// log(__dirname);
// log(__filename);

// setTimeout(()=>log("2 seconds to print"),2000);

let d = new Date().toLocaleTimeString();

let time = 10;

let t1 = setInterval(()=>{
    log(time);
    time-=1;
    if(time < 0 ){
        clearInterval(t1);
        log("clear");
    }
},1000);