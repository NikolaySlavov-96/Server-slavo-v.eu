const https = require('https');
const fs = require('fs');
const express = require('express');
const cors = require('./middlewares/cors');
const emailController = require('./controllers/emailController');
const database = require('./config/database');

const PORT_SERVER = 5000;

const optionse = {
    key: fs.readFileSync('../key.pem'),
    cert: fs.readFileSync('../cert.pem')
}

start();

async function start() {
    const app = express();

    await database();
    console.log('Success DB connect')

    https.createServer(optionse, app)
        .listen(PORT_SERVER, () => console.log('Server Listen in ' + PORT_SERVER));

    app.use(express.json());
    app.use(cors());

    app.use('/subscribe', emailController);

    // app.listen(PORT_SERVER, () => console.log('Server Listen in ' + PORT_SERVER));
}