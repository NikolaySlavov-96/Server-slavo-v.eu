const { getAllPictures } = require('../services/pictureService');

const pictureController = require('express').Router();

pictureController.get('/', async (req, res) => {
    const picture = await getAllPictures();
    res.json(picture);
})

module.exports = pictureController;