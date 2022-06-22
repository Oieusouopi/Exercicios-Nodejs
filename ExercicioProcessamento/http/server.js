const fs = require('fs');
const http = require('http');
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public' ,'index.html'),
        (err, content) => {
            if (err) throw err;
            res.end(content);
        })
    }
}).listen(PORT, () => console.log(`listen on ${ PORT }`));