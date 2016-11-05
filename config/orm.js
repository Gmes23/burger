require('./connection.js');

selectAll = function(
  app.get('/', function(req,res) {
    connection.query('SELECT * FROM burgers;', function(err, data) {
      if (err) throw err;

      res.render('index', {burgers: data});//remember to change this to right handlebar location

    });
  });
)

insertOne = function(
  app.post('/create', function(req,res){
    connection.query('INSERT INTO burgers() VALUES (?)', [req.body.plan], function(err, result) {
      if (err) throw err;
      res.redirect('/');
    });
  });
)

deleteThis = function(
  app.delete('/delete', function(req,res){
    connection.query('DELETE FROM burgers WHERE id = ?', [req.body.id], function(err, result) {
      if (err) throw err;
      res.redirect('/');
    });
  });
)

updateOne = function(
  app.put('/update', function(req,res){

    connection.query('UPDATE burgers SET = ? WHERE id = ?', [req.body.burgers, req.body.id], function(err, result) {
      if (err) throw err;
      res.redirect('/');
    });
  });
)
