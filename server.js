import http from 'http';
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('NodeJS server iniciado');
})

server.listen(port, () => {
    console.log(`Start port ${port}`);
})
