let http = require('http');
let fs = require('fs');

http.createServer((request, response) => {
    if (request.url === '/api/name') {
        response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        response.end('Kohnyuk Aleksandra Sergeevna');
    }
}).listen(5000)
console.log('Server running...')