/* eslint-disable no-undef */
const http = require('http');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<h1>pagina principal</h1>');
    }
    res.end('qualquer pagina');
}).listen(PORT, () => console.log(`listen on ${ PORT }`));