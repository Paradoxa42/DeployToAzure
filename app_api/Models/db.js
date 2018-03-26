
const mongoose = require('mongoose');
const dbURI = 'mongodb://root:tototiti@ds035016.mlab.com:35016/dkpcalculator';

//Connect
mongoose.connect(dbURI);

mongoose.connection.on(
    'connected',
    function() {
        console.log("mongoose connected to " + dbURI);
    }
);

mongoose.connection.on(
    'disconnected',
    function() {
        console.log("mongoose disconnected from " + dbURI);
    }
);

mongoose.connection.on(
    'error',
    function(err) {
        console.log("Mongoose error " + err);
    }
);

//Making models
const characterSchema = new mongoose.Schema({
    name : String,
});

const activitySchema = new mongoose.Schema({
    idChar : Number,
    idActivity : String,
    date:Date,
});

const activityModelSchema = new mongoose.Schema({
    name : String,
    dkpEarning : Number,
});

mongoose.model('activityModel', activityModelSchema, 'activityModel');
mongoose.model('activity', activitySchema, 'activity');
mongoose.model('character', characterSchema, 'character');
