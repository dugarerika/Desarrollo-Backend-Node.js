'use strict'

// cargar libreria http

const http = require('http');
const Chance = require('chance');

const chance = new Chance();

// definir un servidor
const server = http.createServer(function(request, response){
    const nombre = chance.name();
    response.writeHead(200, {
        'content-type':'text/html'
    });
    response.end('Wake up, <b>' + nombre + '</b>.....cambion')
});

// arrancar el servidor
server.listen(1337, '127.0.0.1');
console.log('Servidor arrancado en http://127.0.0.1:1337');