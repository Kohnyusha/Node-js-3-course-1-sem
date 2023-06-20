let http = require('http');
let fs = require('fs');

http.createServer((request, response) => {
    if (request.url === '/html') {
        let html = fs.readFileSync('./index.html')
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        response.end(html);
    }
    if (request.url === '/jpg') {
        let png = fs.readFileSync('./frog.jpg')
        response.writeHead(200, { 'Content-Type': 'image.png; charset=utf-8' });
        response.end(png);
    }
    if (request.url === '/api/name') {
        response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        response.end('Kohnyuk Aleksandra Sergeevna');
    }
    if (request.url === '/xmlhttprequest') {
        let xmlhttprequest = fs.readFileSync('./xmlhttprequest.html')
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        response.end(xmlhttprequest);
    }
    if (request.url === '/fetch') {
        let fetch = fs.readFileSync('./fetch.html')
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        response.end(fetch);
    }
    if (request.url === '/jquery') {
        let jquery = fs.readFileSync('./jquery.html')
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        response.end(jquery);
    }
}).listen(5000)
console.log('Server running...')