var app = require('express')(); // () execute function express module return
app.set('view engine', 'ejs');
app.set('views', './app/views'); //the path starts from where this module will be used, in app.js. 
module.exports = app;