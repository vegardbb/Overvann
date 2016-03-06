var DB = require('./db').DB;

var User = DB.Model.extend({
	tableName: 'yp_persons',
	idAttribute: 'user_id',
});

module.exports = {
	User: User
};
