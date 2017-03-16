const http = require('http');
const fs = require('fs');
const formidable = require('formidable');
const util = require('util');
const mysql = require('mysql');

const port = 1337;
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ale1'
});

var queryData = [];


conn.connect((err) => {
    var sql = 'SELECT * FROM messages';

    conn.query(sql, (err, rows, f) => {
        if (err) {
            console.log(err);
        }
        connection.end();

        for (x = 0; x < rows.length; x++) {
            queryData[i] = rows;
        }
    });
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
    form.parse(req, (err, fields, files) => {
        res.writeHead(200, {
            'content-type': 'text/plain'
        });
        res.write('Data Received:\n\n');
        res.end(util.inspect({
            fields: fields,
            files: files
        }));
    });
}
console.log("Listening on : " + port);