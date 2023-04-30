const { Schema, model } = require('mongoose');

const pictureSchema = new Schema({
    imgName: { type: String, require: true },
    imgPath: { type: String, require: true },
});

const Picture = model('Picture', pictureSchema);

module.exports = Picture;