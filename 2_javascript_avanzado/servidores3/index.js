const http = require('http');
const url = require('url');

const server = http.createServer((req, resp) => {
    const urlObject = url.parse(req.url);
    const path = urlObject.path
    // const pathName = urlObject.pathName
    console.log(`Path:${path}`);
    // console.log(`Path Name: ${pathName}`);

    let status = 0;
    let responseStr = '';
    let mimeType = { ContentType: 'application/json' }


   

    if (path === '/') {
        responseStr = { message: 'ok' };
        status = 200;
    } else if (path === '/permisos') {
        responseStr = { message: 'forbidden' };
        status = 403;
    } else if (path === '/loquesea.txt') {
        responseStr = { message: 'Request time out' };
        status = 408;
    } else {
        responseStr = { message: 'Not found' };
        status = 404;
    }

    const responseToString = JSON.stringify(responseStr)

    resp.writeHead(status, mimeType);
    resp.write(responseToString);
    resp.end();
});


server.listen(8080)

console.log('inicio mi servidor en el puerto 8080');