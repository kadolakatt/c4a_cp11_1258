"use strict";

const http = require('http');
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

const server = http.createServer(function (req, res) {
    eventEmitter.emit('onRequestReceived', req.url);
    res.writeHead(200, {"content-type": "text/html"});
    res.end("<h1>Hola Mundo</h1>");
    eventEmitter.emit('onResponseSent', req.url);
});

eventEmitter.on('onRequestReceived', function (url) {
    console.log("Petición recibida a la url: " + url);
});

eventEmitter.on('onResponseSent', function (url) {
    console.log("Respuesta enviada " + url);
});

console.log("Servidor corriendo...");
server.listen(8000);