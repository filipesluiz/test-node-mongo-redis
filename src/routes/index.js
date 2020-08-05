const ArtigosRepository = require('../repositories/artigosRepository');

module.exports = (app) => {

    app.get('/', (req, res) => {
        //res.render('home/index');
        console.log('chamou!!!', ArtigosRepository.findAll());
        res.send(ArtigosRepository.findAll());
    });
    
    app.get('/add_noticia', (req, res) => {
        res.render("admin/form_add_noticia");
    });
    
    app.get('/noticias', (req, res) => res.render("noticias/noticias"));

}    

