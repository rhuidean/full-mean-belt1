let path = require('path');
let Users = require('../controllers/users');

module.exports = function(app){
	app.get('/users', Users.index);
	app.post('/users', Users.create);
    app.get('/users/:id',Users.show);
    app.delete('/users/:id',Users.logout);
    // app.delete('/users/:id',Users.destroy);
    app.get('/session',Users.session);
    app.post('/session',Users.authenticate);
    // app.delete('/session',Users.logout);
}


//Route.get() requires callback functions but got a [object Undefined] -> unmatching controller method and route
//Postman error ->name cannot be blank check spelling