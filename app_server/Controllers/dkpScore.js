const apiUrl = require('./apiUrls');
const request = require('request');

const index = function(req, res, next) {
      res.render('dkpScore', { title: 'Express' });
}

module.exports = {
  index
};