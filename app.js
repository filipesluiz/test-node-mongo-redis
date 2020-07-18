var { app, redisClient } = require('./src/config/server');
var routes = require('./src/routes/index')(app);
const port = 3000;
//redisClient.on('connect', () => console.log(' Redis Connected!!!'));
app.listen(port, () => { console.log('Server running!!!'); });

