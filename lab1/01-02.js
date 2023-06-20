const http = require('http')

    let server = http.createServer((req,res)=> {
        let body = '';
        req.on('data', chunk => {//on-метод, реагирующий на события, а событие - передача данных. 
          body += chunk
        })
        //сервер отвечает, 200 - код успешного выполнения, указываем тип контента - хтмл страница
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' })
      
        req.on('end', () => {
          let headersHtml = ''
          for (field in req.headers) {
            headersHtml += `<h3>Header ${field}: ${req.headers[field]}</h3>`
          }
          res.end(`
            <h1>Method: ${req.method}</h1>
            <h1>Url: ${req.url}</h1>
            <h1>Body: ${body}</h1>
            <h1>Заголовки: </h1>
            ${headersHtml}
        `)
        })
      })
      
      server.listen(3000, () => {
        console.log('server has started...')
      })