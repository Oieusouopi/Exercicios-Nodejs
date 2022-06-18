const os = require('os');
const { myMessage } = require('./log');

setInterval( () => {
    
    const { freemem, totalmem } = os;
    const memoryTotal = parseInt(totalmem() / 1024 / 1024);
    const memoryFree = parseInt(freemem() / 1024 / 1024);
    const percentFree = parseInt(memoryFree / memoryTotal * 100);

    const statsCpu = {
        total: `${ memoryTotal }MB`,
        free: `${ memoryFree }MB`,
        usage: `${ percentFree }%`,
    };

    console.clear();
    console.table(statsCpu);
    myMessage(`${ JSON.stringify(statsCpu) }\n`);

}, 1000);