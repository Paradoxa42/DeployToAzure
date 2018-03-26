const express = require('express');
const route = express.Router();

const characterController = require('../controller/characterController');
const activityController = require('../controller/activityController');
const activityModelController = require('../controller/activityModelController');

//CharacterRoutes
route
    .route('/character')
    .get(characterController.getCharacters)
    .post(characterController.postCharacter)

route
    .route('/character/:id')
    .get(characterController.getCharacter)
    .put(characterController.putCharacter)
    .delete(characterController.deleteCharacter);

route
    .route('/activity')
    .get(activityController.getActivitySchemas)
    .post(activityController.postActivitySchema)

route
    .route('/activity/:id')
    .put(activityController.putActivitySchema)
    .delete(activityController.deleteActivitySchema);

route
    .route('/activityModel')
    .post(activityModelController.postActivityModelSchema)
    .put(activityModelController.putActivityModelSchema)
    .delete(activityModelController.deleteActivityModelSchema)

route
    .route('/activity/:id')
    .get(activityModelController.gettActivityModelSchemaByCharacter)

module.exports = route;