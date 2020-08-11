const ArtigosRepository = require('../repositories/artigosRepository');

module.exports = (app) => {

    app.get('/', (req, res) => {
        //res.render('home/index');
        ArtigosRepository.findAll((result) => {
            console.log('Query Route', result);
            res.send(result);
        });
    });
    
    app.get('/add_noticia', (req, res) => {
        res.render("admin/form_add_noticia");
    });
    
    app.get('/noticias', (req, res) => res.render("noticias/noticias"));

}    

