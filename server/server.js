const http = require('http');

http.createServer((req, res) => {
    const url = req.url;
    const methode = req.method;

    if (url == '/' && methode == 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<h1>Hello World</h1>`);
        res.end();
    }
}).listen(3000, () => {
    console.log("The server is running in 3000 port ");
})