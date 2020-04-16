let http = require('http')
let fs = require('fs')

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q='
const API_KEY = 'YOUR API KEY HERE'

let server = http.createServer(function(req, res) {
    console.log(`${BASE_URL}The%20Big%20Short&key=${API_KEY}`)
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile('./index.html', null, function (err, data) {
        if (err) {
            res.writeHad(404);
            res.write('Whoops! File not found!');
        } else {
            res.write(data);
        }
        res.end();
    });
});

server.listen(8000);
