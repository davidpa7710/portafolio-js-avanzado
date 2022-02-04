
const http = require('http')

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write('<html><body>Hola desde Node!</body></html>')
    response.end();
});

server.listen(2000);

console.log('inicio mi servidor en el puerto 2000');