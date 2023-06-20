let http = require('http');
let fs = require('fs');//

http.createServer(function (request, response) {
    if (request.url === '/') {
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    }
    let html = fs.readFileSync('./index.html')
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(html);//сервер отправляет ответ, когда с клиента пришел гет запрос (он приходит, когда перехожу по юрл)
}).listen(5000);

console.log('Server running...')