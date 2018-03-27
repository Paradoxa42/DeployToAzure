const mongoose = require('mongoose');

const activitModelSchema = mongoose.model('activityModel');

//GET activitiesModel by character
const gettActivityModelSchemaByCharacter = function(req, res) {
    activityModelSchema.find(function(err, data) {
        if (err) {
            res.status(500).json({'status' : 'failed'});
        }
        res.status(200).json(data);
    })
};

//POST activityModel
const postActivityModelSchema = function (req, res) {
    var item = new activityModelSchema({
        name : req.body.name,
        dkpEarning : req.body.dkpEarning,    
    });
    item.save(function(err, post) {
        if (err) { 
            res.status(500).json({'status' : 'error in mongo'});
        }
        else {
            res.status(200).json({'status' : 'ok', 'data' : post});
        }
    })

};

//PUT activityModel
const putActivityModelSchema = function (req, res) {
    res.status(201).json({'status' : 'ok'});
};

//DELETE activityModel
const deleteActivityModelSchema = function (req, res) {
    activityModelSchema.remove({ _id : ObjectId(req.params.id)} , function(err, data) {
        if (err) {
            res.status(500).json({'status' : 'failed'});
        }
        res.status(200).json(data);
    })
};

module.exports = {
    gettActivityModelSchemaByCharacter,
    postActivityModelSchema,
    putActivityModelSchema,
    deleteActivityModelSchema,
};