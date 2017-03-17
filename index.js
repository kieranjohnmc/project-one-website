const http = require('http');
const fs = require('fs');
const formidable = require('formidable');
const util = require('util');
const nodemailer = require('nodemailer');

const port = 1337;

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kieranmcbride13@gmail.com',
        pass: 'Sdxk4115'
    }
});

//Creating the node.js webserver.
var server = http.createServer((req, res) => {
    //Anonymous func to route by request type.
    if (req.method.toLowerCase() === 'get') {
        present(res);
    } else if (req.method.toLowerCase() === 'post') {
        processForm(req, res);
    }
}).listen(port);

//Presents form.
function present(res) {
    fs.readFile('Contact.html', (err, data) => {
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'Content-Length': data.length
        });
        res.write(data);
        res.end();
    })
}

//Presents the data from the POST request.
function processForm(req, res) {
    var form = new formidable.IncomingForm();
    var s = "";
    form.parse(req, (err, fields, files) => {
        console.log(fields);
    });

    console.log(s);

    let mailOptions = {
        from: '"Kieran McBride" <kieranmcbride13@gmail.com>',
        to: 'kieranmcbride13@outlook.com',
        subject: 'Contact Reqest',
        text: 'Thanks for contacting us. This is an automated email and an operator will be in touch within 3-5 working days.',
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }

        console.log('Message %s sent %s!', info.messageId, info.response);
    });
    fs.readFile('Contact.html', (err, data) => {
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'Content-Length': data.length
        });
        res.write(data);
        res.end();
    });
};
console.log("Listening on : " + port);