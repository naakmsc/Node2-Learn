const log = console.log;
const mongoose = require("mongoose");

let url = "mongodb://localhost:27017/node2";

mongoose.connect(url);

let db = mongoose.connection;

db.on("error",console.error.bind(console,"Connection Error"));

db.once("open",()=>{
    log("Connection Success");
});

let bookSchema = mongoose.Schema({
    name:String,
    price:Number,
    author:String
});

let Book = mongoose.model("Book",bookSchema,"bookstore");

let book1 = new Book({name:"Harry Potter",price:50.50,author:"Mc"});

let books = [
    {name:"Lord of the Ring",price:15.50,autho:"Unknow"},
    {name:"El festival de la Blasfemia",price:25.50,autho:"Dross"},
    {name:"Caras Vemos",price:7.50,autho:"Burra"},
    {name:"Vete a la M ",price:99.50,autho:"Jai"},
    {name:"Que Cosas",price:170,autho:"Chrisdiospria"},
    {name:"Luna de Pluton",price:110,autho:"Dross"},
    {name:"Tengo hambre",price:35,autho:"Ñoña"}
];

Book.collection.insertMany(books,(error,docs)=>{
    if(error){
        log("DOCs Err: "+error);
    }else{
        log(`${docs.insertedCount} Documents inserted`);
    }
});

// book1.save((error,book)=>{
//     if(error){
//         log("ER Mongo: "+error);
//     }else{
//         log(`${book.name} document inserted successfully`);
//         db.close();
//     }
// });