'use strict'

const EventEmitter = require('events');

// Creo una instancia de emisor de eventos
const emisor = new EventEmitter;

emisor.on('Llamada de telefono', (options) => {
    if (options.llamante === 'madre'){
        return;
    }
    console.log('ring ring');
});

emisor.once('Llamada de telefono', (options) => {
    console.log('brr brr');
});

emisor.emit('Llamada de telefono', {llamante:'madre'});
// emisor.emit('Llamada de telefono');
// emisor.emit('Llamada de telefono');





