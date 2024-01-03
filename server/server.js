// external libs
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// database
require('./src/db');

// routes
const router = require('./src/router');

const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors())
server.use('/api', router);

const PORT = process.env.PORT | 5000;

server.listen(PORT, (req, res) => console.log(`server is launched at ${PORT}`));

server.get('/', (req, res) => res.send('Hello World!'));
