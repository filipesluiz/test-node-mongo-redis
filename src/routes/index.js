//const ArtigosRepository = require('../repositories/artigosRepository');
var logger = require('../config/logger');

module.exports = (app) => {

    app.get('/', (req, res) => {
       logger.info('Endpoint home!');
       res.render('home/index');
       /* ArtigosRepository.findAll((result) => {
            console.log('Query Route', result);
            res.send(result);
        });*/
    });
    
    app.get('/add_noticia', (req, res) => {
        logger.info('Endpoint Add!');
        res.render("admin/form_add_noticia");
    });
    
    app.get('/noticias', (req, res) => {
        logger.info('Endpoint noticias!');
        res.render("noticias/noticias");
    });

}    

