const mongoose = require('mongoose');

const CONNECTION_STRING = 'mongodb://192.168.88.50/cvSlavo-v';


module.exports = async (app) => {
    try {
        await mongoose.connect(CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    } catch (err) {
        console.error(err);
    }
}

