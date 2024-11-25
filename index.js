const fs = require('fs');
const http = require('node:http');
const path = require('path');
const url = require('url');
require("dotenv").config();
const dotenv = require("dotenv").config();






fs.writeFile('.env', '', err => {
    if (err) {
        console.error(err);
    } else {
        console.log('.env file created');
    }
})

fs.writeFile('.gitignore', '', err => {
    if (err) {
        console.error(err);
    } else {
        console.log('.gitignore file created')
    }
})



const server = http.createServer((req, res) => {

    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        })
    }

    if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        })
    }

    if (req.url === '/contact') {
        fs.readFile(path.join(__dirname, 'public', 'contact-me.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        })
    }
})
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`server listening on ${PORT}`)

);