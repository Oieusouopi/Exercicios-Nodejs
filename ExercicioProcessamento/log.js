/* eslint-disable no-undef */
const event = require('events');
const fs = require('fs');
const path = require('path');

const emitter = new event();

emitter.on('log', (message) => {
    fs.appendFile(path.join(__dirname, 'log.txt'), message, error => {
        if (error) throw error;
    });
});

const myMessage = (message) => {
    emitter.emit('log', message);
};

module.exports = {
    myMessage,
};