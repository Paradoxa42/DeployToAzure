const mongoose = require('mongoose');

const activitModelSchema = mongoose.model('activityModel');

//GET activitiesModel by character
const gettActivityModelSchemaByCharacter = function(req, res) {
    res.status(200).json(
        {
            'idChar' : '',
            'idActivity' : '',
            'date' : '',
        }
    )
};

//POST activityModel
const postActivityModelSchema = function (req, res) {
    res.status(201).json({'status' : 'ok'});
};

//PUT activityModel
const putActivityModelSchema = function (req, res) {
    res.status(201).json({'status' : 'ok'});
};

//DELETE activityModel
const deleteActivityModelSchema = function (req, res) {
    res.status(201).json({'status' : 'ok'});
};

module.exports = {
    gettActivityModelSchemaByCharacter,
    postActivityModelSchema,
    putActivityModelSchema,
    deleteActivityModelSchema,
};