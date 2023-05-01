const Picture = require("../models/Picture");

async function getAllPictures() {
    return await Picture.find({});
}

module.exports = {
    getAllPictures,
}