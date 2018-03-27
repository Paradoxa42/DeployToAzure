const mongoose = require('mongoose');

const activitySchema = mongoose.model('activity');

//GET activities
const getActivitySchemas = function(req, res) {
    activitySchema.find({ idChar : req.params.id} ,function(err, data) {
        if (err) {
            res.status(500).json({'status' : 'failed'});
        }
        res.status(200).json(data);
    })
};

//POST activity
const postActivitySchema = function (req, res) {
    var item = new activitySchema({
        idChar : req.params.id,
        idActivity : req.body.id,
        date : new Date(),
    });
    item.save(function(err, post) {
        if (err) { 
            res.status(500).json({'status' : 'error in mongo'});
        }
        else {
            res.status(200).json({'status' : 'ok', 'data' : post});
        }
    });
};

//PUT activity
const putActivitySchema = function (req, res) {
    res.status(201).json({'status' : 'ok'});
};

//DELETE activity
const deleteActivitySchema = function (req, res) {
    activitySchema.remove({ _id : ObjectId(req.params.id)} , function(err, data) {
        if (err) {
            res.status(500).json({'status' : 'failed'});
        }
        res.status(200).json(data);
    })
};

module.exports = {
    getActivitySchemas,    
    postActivitySchema,
    putActivitySchema,
    deleteActivitySchema,
};