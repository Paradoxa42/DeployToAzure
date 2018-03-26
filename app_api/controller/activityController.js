const mongoose = require('mongoose');

const activitySchema = mongoose.model('activity');

//GET activities
const getActivitySchemas = function(req, res) {
    res.status(200).json(
        {
            'name' : '',
            'dkpEarning' : '',
        }
    )
};

//POST activity
const postActivitySchema = function (req, res) {
    res.status(201).json({'status' : 'ok'});
};

//PUT activity
const putActivitySchema = function (req, res) {
    res.status(201).json({'status' : 'ok'});
};

//DELETE activity
const deleteActivitySchema = function (req, res) {
    res.status(201).json({'status' : 'ok'});
};

module.exports = {
    getActivitySchemas,    
    postActivitySchema,
    putActivitySchema,
    deleteActivitySchema,
};