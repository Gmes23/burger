var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all('burgers', function(res) {
      cd(res);
    });
  },
  create: function(cb) {
    orm.create('burgers' , function(res) {
      cb(res);
    });
  },
  update: function(cb) {
    orm.update('burgers', function(res) {
      cb(res);
    });
  }
}

module.exports = burger;
