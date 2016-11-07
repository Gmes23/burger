var connection = require('./connection.js');

var orm = {
  all: function(cb) {
    var selectFROM = 'SELECT * FROM burgers;';
    connection.query(selectFROM, function(err, data) {
      if (err) throw err;
       cd(data);
     });
  },
  create: function(cb) {
    connection.query('INSERT INTO burgers (burger_name) VALUES (?)', [req.body.newBurgers], function(err, result) {
      if (err) throw err;
      cd(result);
    });
 },
  update : function(cb) {
    connection.query('UPDATE burgers SET devoured = ? WHERE id = ? ', [req.body.eatBurger, req.params.id], function(err, result){
      if (err) throw err;
      cd(result);
    })
  },
  delete : function(cb) {
    connection.query('DELETE FROM burger WHERE id = ?', [req.body.id], function(err, result) {
      if (err) throw err;
      res.redirect('/');
    });
  }
};

module.exports = orm;
