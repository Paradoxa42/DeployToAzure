const mongoose = require('mongoose');

const characterModel = mongoose.model('character');

//GET all characters
const getCharacters = function(req, res) {
    res.status(200).json({'name' : ''})
};

//GET character by ID
const getCharacter = function(req, res) {
    res.status(200).json({'name' : ''})
};

//POST character
const postCharacter = function(req, res) {
    res.status(201).json({'status' : 'in progress'});
}

//PUT character
const putCharacter = function(req, res) {
    res.status(201).json({'status' : 'in progress'});
}

//DELETE character
const deleteCharacter = function(req, res) {
    res.status(201).json({'status' : 'in progress'});
}

module.exports = {
    getCharacter,
    getCharacters,
    postCharacter,
    putCharacter,
    deleteCharacter,
}