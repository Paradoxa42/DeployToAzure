const express = require('express');
const route = express.Router();

const characterController = require('../controller/characterController');
const activityController = require('../controller/activityController');
const activityModelController = require('../controller/activityModelController');

//Character routes
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
    .route('/charactersScore')
    .get(characterController.getCharactersScore);

//Activities routes
route
    .route('/activity/:id')
    .get(activityController.getActivitySchemas)
    .post(activityController.postActivitySchema)

route
    .route('/activity/:id')
    .put(activityController.putActivitySchema)
    .delete(activityController.deleteActivitySchema);

//ActivitiesModel routes
route
    .route('/activityModel')
    .get(activityModelController.gettActivityModelSchemaByCharacter)
    .post(activityModelController.postActivityModelSchema)
    .put(activityModelController.putActivityModelSchema)
route.route('/activityModel/:id')
    .delete(activityModelController.deleteActivityModelSchema)

module.exports = route;