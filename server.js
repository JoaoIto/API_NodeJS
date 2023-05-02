const http = require ('http');
const port = 3000;

const rotas = {
    '/': 'Curso de NodeJS',
    '/livros': 'Página de livros',
    '/autores': 'Página de autores'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url]);
})

server.listen(port, () => {
    console.log(`Start port ${port}`);
})
