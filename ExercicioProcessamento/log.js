const event = require('events');

const emitter = new event();

emitter.on('log', (message) => {
    console.log(message);
});

const myMessage = (message) => {
    emitter.emit('log', message);
};

module.exports = {
    myMessage,
};