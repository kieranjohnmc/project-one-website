const http = require('http');
const fs = require('fs');
const formidable = require('formidable');
const util = require('util');
const port = 1337;

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
    form.parse(req, (err, fields) => {
        res.writeHead(200, {
            'content-type': 'text/plain'
        });
        res.write('Data Received:\n\n');
        res.end(util.inspect({
            fields: fields,
        }));
    });
}
console.log("Listening on : " + port);