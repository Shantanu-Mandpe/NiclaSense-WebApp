const http = require('http')
const fs = require('fs');
const { error } = require('console');

const hostname = '127.0.0.1';
const port = 3000;



const server = http.createServer((req, res) => { //request , response
    res.writeHead(200,{'Content-Type': 'text/html'})
    fs.readFile('index.html',function(error,data) {
        if (error) {
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
            res.write(data)
        }
        res.end()
    })
    /*res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');*/
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});