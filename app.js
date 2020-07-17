var app = require('./config/server');
var routers = require('./app/routers/index')(app);
const port = 3000;
app.listen(port, () => { console.log('Server running!!!'); });