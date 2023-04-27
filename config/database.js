const mongoose = require('mongoose');

const CONNECTION_STRING = 'mongodb://192.168.88.50/cv.slavo-v.eu';


module.exports = async (app) => {
    try {
        await mongoose.connect(CONNECTION_STRING);
    } catch (err) {
        console.error(err);
    }
}

