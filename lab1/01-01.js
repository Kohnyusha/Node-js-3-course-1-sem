const http = require('http')//require типо метод, указ, что модуль http

    let server = http.createServer((req,res)=>{
    res.end('<h1>Hello World</h1>')//сервер отправляет ответ, когда с клиента пришел гет запрос, он приходит, когда перехожу по юрл 
})
server.listen(3000, () => {
    console.log('server has started...')
  })