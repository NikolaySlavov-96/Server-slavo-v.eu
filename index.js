const https = require('https');
const fs = require('fs');
const express = require('express');
const cors = require('./middlewares/cors');
const database = require('./config/database');

const emailController = require('./controllers/emailController');
const projectController = require('./controllers/projectController');

const PORT_SERVER = 5000;
/*
const optionse = {
    // key: fs.readFileSync('../p-key.key'),
    key: fs.readFileSync('../key-PRK.pem'),
    // cert: fs.readFileSync('../crt.crt'),
    cert: fs.readFileSync('../cert-CRT.pem'),
    ca: [
        fs.readFileSync('../ca-bundle.pem')
    ]
}
*/
start();

async function start() {
    const app = express();

    await database();
    console.log('Success DB connect')

    // https.createServer(optionse, app).listen(PORT_SERVER, () => console.log('Server Listen in ' + PORT_SERVER));

    app.use(express.json());
    app.use(cors());

    app.get('/', (req, res) => {
        res.status(200).json({ message: 'Success' });
    });

    app.use('/subscribe', emailController);
    app.use('/project', projectController);

    app.listen(PORT_SERVER, () => console.log('Server Listen in ' + PORT_SERVER));
}