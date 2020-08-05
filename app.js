var { app, redisClient } = require('./src/config/server');
const port = 3000;
app.listen(port, () => { console.log('Server running!!!'); });

