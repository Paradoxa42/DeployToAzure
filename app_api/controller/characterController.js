const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;
const characterModel = mongoose.model('character');
const activitySchema = mongoose.model('activity');
const activitModelSchema = mongoose.model('activityModel');

//GET all characters score
const getCharactersScore = function(req, res) {
    characterModel.find(function(err, data) {
        if (err) {
            res.status(500).json({'status' : 'failed'});
        }
        res.status(200).json(data);
    })
}

//GET all characters
const getCharacters = function(req, res) {
    characterModel.find(function(err, data) {
        if (err) {
            res.status(500).json({'status' : 'failed'});
        }
        res.status(200).json(data);
    })
};

//GET character by ID
const getCharacter = function(req, res) {
    characterModel.find({ _id : ObjectId(req.body.id)} , function(err, data) {
        if (err) {
            res.status(500).json({'status' : 'failed'});
        }
        res.status(200).json(data);
    })
};

//POST character
const postCharacter = function(req, res) {
    var item = new characterModel({
        name : req.body.name,
        total : 0,
    });
    item.save(function(err, post) {
        if (err) { 
            res.status(500).json({'status' : 'error in mongo'});
        }
        else {
            res.status(200).json({'status' : 'ok', 'data' : post});
        }
    })
}

//PUT character
const putCharacter = function(req, res) {
    res.status(201).json({'status' : 'in progress'});
}

//DELETE character
const deleteCharacter = function(req, res) {
    console.log("Delete character");
    characterModel.remove({ _id : ObjectId(req.params.id)} , function(err, data) {
        console.log("removed kebab");
        if (err) {
            res.status(500).json({'status' : 'failed'});
        }
        res.status(200).json(req.params.id);
    }).exec()
}

module.exports = {
    getCharactersScore,
    getCharacter,
    getCharacters,
    postCharacter,
    putCharacter,
    deleteCharacter,
}