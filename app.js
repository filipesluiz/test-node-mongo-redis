var { app, redisClient } = require('./src/config/server');
const port = 3000;
//redisClient.on('connect', () => console.log(' Redis Connected!!!'));
app.listen(port, () => { console.log('Server running!!!'); });

