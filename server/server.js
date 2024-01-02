// external libs
const express = require('express');

// db
// const { connectToDb, getDb } = require('./src/db');

const server = express();
const PORT = 3000;

server.listen(PORT, (req, res) => console.log('server is launched'));

server.get('/', (req, res) => res.send('Hello World!'));
