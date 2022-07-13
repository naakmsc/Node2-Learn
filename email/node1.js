const log = console.log;

let nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user:"naakmsc18@gmail.com",
        pass:"naak12345678"
    }
});

let mailOptions= {
    from: "naakmsc18@gmail.com",
    to: "naakmsc18@gmail.com, naakmsc25@gmail.com, naakmsc555@gmail.com",
    subject: "Mail sent successfully",
    // text: "Congratulations, successfully registered with us."
    html:`
        <h3>
            <span>Congratulation!!!</span><br>
            <p>Successfully Registered with Us</p>
        </h3>
    `
};

transporter.sendMail(mailOptions,function(error,info){
    if(error){
        log(error);
    }else{
        log("Email Sent Successfully");
    }
});