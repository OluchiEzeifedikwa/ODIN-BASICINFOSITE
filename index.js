const fs = require('fs');
const http = require('node:http');
<<<<<<< HEAD
const path = require('path');
=======
>>>>>>> 9ab15c118cba0019d6269ebe0a414f5daaf053cb
const url = require('url');
require("dotenv").config();
const dotenv = require("dotenv").config();


<<<<<<< HEAD


=======
fs.writeFile('index.html','!', err => {
    if (err) {
        console.error(err);
    } else {
        console.log('index.html Created');
    }
})


fs.writeFile('about.html','!', err => {
    if (err) {
        console.error(err);
    } else {
        console.log('about.html Created');
    }
})

fs.writeFile('contact-me.html','!', err => {
    if (err) {
        console.error(err);
    } else {
        console.log('contact-me.html Created');
    }
})

fs.writeFile('404.html','!', err => {
    if (err) {
        console.error(err);
    } else {
        console.log('404.html Created');
    }
})



fs.writeFile('index.js','', err => {
    if (err) {
        console.error(err);
    } else {
        console.log('index.js Created');
    }
})
>>>>>>> 9ab15c118cba0019d6269ebe0a414f5daaf053cb


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
<<<<<<< HEAD

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
=======
    res.writeHead(200, {'Content-Type': 'Application/json'})
    res.end(JSON.stringify(
        {data: 'Hello WOrld'}
    ))

})

server.listen(8000);
>>>>>>> 9ab15c118cba0019d6269ebe0a414f5daaf053cb
