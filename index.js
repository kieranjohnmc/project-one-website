const http = require('http');
const fs = require('fs');
const formidable = require('formidable');
const util = require('util');



var server = http.createServer((req, res) => {
    if(req.method.toLowerCase() === 'get') {
        present(res);
    } else if(req.method.toLowerCase() === 'post') {
        processForm(req, res);
    }
});

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

function processForm(req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
        res.writeHead(200, {
            'content-type': 'text/plain'
        });
        res.write('Data Received:\n\n');
        res.end(util.inspect({
            fields: fields,
            files, files
        }));
    });
} 





server.listen(1185);
console.log("Listening on : 1185");