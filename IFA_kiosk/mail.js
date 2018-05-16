'use strict';
const nodemailer = require('nodemailer');
//var inlineBase64 = require('nodemailer-plugin-inline-base64');




//express aka the devil
const express = require('express')
//var multer  = require('multer')
//var upload = multer({ dest: 'uploads/' })
var bodyParser = require('body-parser')

//var multipart = require('connect-multiparty');
var cors = require('cors')
const app = express()

app.use(cors())

nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.sendgrid.net',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "apikey", // generated ethereal user
            pass: "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" // generated ethereal password
        },
      /*  tls: {
        ciphers:'SSLv3'
    }*/
    });

/*nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "s5fmmyjbiiwyztdh@ethereal.email", // generated ethereal user
            pass: "pekSMVGVNxQpNxErR4" // generated ethereal password
        },
   /*     tls: {
        ciphers:'SSLv3'
    }
    });*/

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
//pp.use(bodyParser.json())

app.use(bodyParser.json({limit: '900mb'})) 
app.use(bodyParser.urlencoded({limit: '900mb', extended: true}))

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))

  var address = req.body;
  var sendo = address['address'];
  var sixtyfour = address['image'];
  /*Object.keys(address).forEach(function(key, keyIndex) {
  console.log("index:",keyIndex,"key:",key,"value:",address[key]);
});*/
  console.log(sendo);

  finalMail(sendo,sixtyfour);
 
})

/*module.exports.express = {
    bodyParser: function() {
        return require('express').bodyParser({limit: '900mb'});
    }
}*/




/*app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies */

app.listen(3000, () => console.log('Example app listening on port 3000!'))

/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});*/

app.get('/', function(req, res) {
  // Handle the get for this route
});

app.post('/', function(req, res) {
var photo=req.body.image;
var addr=req.body.address;

 //res.send('Roastie POSTie');
 //setTimeout(corn,2000);

  // setup email data with unicode symbols
  

});



/*var multipartMiddleware = multipart();
app.post('/', multipartMiddleware, function(req, resp, next) {
    var attach = req.files;
   var address = req.body;
  console.log(attach,address);
   res.send('Roastie POSTie'+attach+''+address);
  // don't forget to delete all req.files when done
});*/



/*app.get('/', function(req, res, next) {
  // Handle the get for this route
});

app.post('/', function(req, res, next) {
  
  var attach = req.body;
      // address = req.body.address;

        res.send('Roastie POSTie'+attach);
        console.log('attach');
});*/

/*app.post('/', upload.array('photos', 1), function (req, res, next) {
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any

  var attach = req.files,
   address = req.body;
   res.send('Roastie POSTie'+' '+attach+' '+address);
})*/

/*app.post('/', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  var attach = req.file;
   var address = req.body;
   console.log('Roastie POSTie'+' '+attach+' '+address);
})
*/


// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
global.finalMail=function(addr,image){
 let mailOptions = {
        from: '"bing photobooth" <photokiosk@outlook.com>', // sender address
        to: 'plethra@gmail.com,'+addr, // list of receivers need var
        subject: 'Your photobooth photo', // Subject line
        text: 'Thanks for stopping by!', // plain text body
        html: '<img src="data:image/png;base64,'+image+'">',
        attachDataUrls:true
    };


    //base64
   // transporter.use('compile', inlineBase64({cidPrefix: 'pb_'}));

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
}

});




   

