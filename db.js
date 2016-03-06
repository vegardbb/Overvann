
var config = {
	host: 'localhost',  // your host
	user: 'ovase', // your database user
	password: 'OvaseDBase55', // your database password
	database: 'ovase',
	charset: 'UTF8_GENERAL_CI'
};

var knex = require('knex')({
  client: 'mysql',
  connection: config
});

var Bookshelf = require('bookshelf')(knex);

/*
var DB = Bookshelf.initialize({
	client: 'mysql', 
	connection: config
});
*/

module.exports.DB = Bookshelf;
