const apiUrl = require('./apiUrls');
const request = require('request');

const index = function(req, res, next) {
    const requestGetOption = {
      url : apiUrl.server + '/api/character',
      method : 'GET',
      json : {},
      qs : {},
    }
    request(requestGetOption,
    function(err, response, body) {
      if (err) {
        console.log(err.message);    
      } else if (response.statusCode != 200) {
        console.log("Error in API : " + response.statusMessage);
      } else if (body instanceof Array) {
        console.log("Unusual response API ");
      } else if (!body.length) {
        console.log("No document in Response");
      }
      res.render('dkpScore', { title: 'Express' });
    }
    );
}

module.exports = {
  index
};