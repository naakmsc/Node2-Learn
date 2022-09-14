let express = require("express");
let bodyparser = require("body-parser");
let mongoose = require("mongoose");
let router = express.Router();


const log = console.log;

let app = express();

router.use(bodyparser.json());
router.use(express.urlencoded({extended:false}));

let url = "mongodb+srv://admin:1234@cluster0.olifim4.mongodb.net/nodito?retryWrites=true&w=majority";

mongoose.connect(url);

let db = mongoose.connection;

db.on("error",console.error.bind(console,"Connectoin Error!!!"));

db.once("open",()=>log("Connection with cloud mongo db is successfully"));

let enquiriesSchema = mongoose.Schema({
    name:String,
    email:String,
    mobile:String,
    subject:String,
    message:String
});

let Enquiries = mongoose.model("Enquiries",enquiriesSchema,"enquiries");

app.post("/contact",(req,res)=>
{
    let enquiry1 = new Enquiries(req.body);

    enquiry1.save((err,result)=>
    {
        if(err){
            log(err);
        }else{
            log(`${enquiry1.name} document saved successfully`);
        }
    });

    res.send(`<h2>Dear ${req.body.name}, Registration Successfully. Thanks to contact me.</h2>`);
});

module.exports=router;