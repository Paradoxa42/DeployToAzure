const index = function(req, res, next) {
    res.render('dkpTable', { title: 'Express' });
  }

module.exports = {index};