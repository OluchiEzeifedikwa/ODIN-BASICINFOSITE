const fs = require('fs');
const http = require('node:http');
const url = require('url');
require("dotenv").config();
const dotenv = require("dotenv").config();


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



// fs.writeFile('index.js','', err => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('index.js Created');
//     }
// })


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
    res.writeHead(200, {'Content-Type': 'Application/json'})
    res.end(JSON.stringify(
        {data: 'Hello WOrld'}
    ))

})

server.listen(8000);