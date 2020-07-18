    const test = (redisClient) => {
    //Testing Redis commands
    redisClient.set('total', 1800);
    redisClient.get('total', (error, value) => console.log(value));
    //Hash
    redisClient.hmset('languages', 'portugues', 'ingles', 'espanhol', 'alemao');
    redisClient.hgetall('languages', function (err, object) {
        console.log(object);
    });
    //List
    redisClient.del('frameworks');
    redisClient.rpush(['frameworks', 'angular', 'react', 'vue'], function (err, reply) {
        console.log(reply); 
    });
    redisClient.lrange('frameworks', 0, -1, function (err, reply) {
        console.log(reply); 
    });    
        
    //Creating List with Set
    redisClient.sadd(['tags', 'angularjs', 'angularjs', 'backbonejs', 'emberjs'], function (err, reply) {
        console.log(reply);
    });

    redisClient.smembers('tags', function (err, reply) {
        console.log(reply);
    });

    //Expire
    redisClient.set('total', '1800');
    redisClient.expire('total', 10);
  
}

module.exports = test;