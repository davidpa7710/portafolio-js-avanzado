const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, resp) => {
    const urlObject = url.parse(req.url);
    const path = urlObject.path
    let fileSystemPath = '';
    console.log(`Path:${path}`);
    // console.log(`Path Name: ${urlObject.pathname}`);


    if (path === '/') {
        fileSystemPath = 'static/index.html'
    } else {
        fileSystemPath = `static/${path}`
    }

    fs.stat(fileSystemPath, error => {
        if (!error) {
            fs.readFile(fileSystemPath, (error, archivo) => {
                if (!error) {
                    resp.writeHead(200, { 'Content-Type': 'text/html' });
                    resp.write(archivo);
                    resp.end();  
                }else {
                    resp.writeHead(500, { 'Content-Type': 'text/plain' });
                    resp.write('INTERNAL ERROR SERVER 500');
                    resp.end(); 
                }
            })
        } else {
            resp.writeHead(404, { 'Content-Type': 'text/html' });
            resp.write('<html><body><h1>NOT FOUND 404</h1></body></html>');
            resp.end();
        }
    })

});

server.listen(8080)

console.log('inicio mi servidor en el puerto 8080');