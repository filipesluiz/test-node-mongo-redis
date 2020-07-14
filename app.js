var app = require('express')(); // () execute function express module return
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home/index');
});

app.get('/add_noticia', (req, res) => {
    res.render("admin/form_add_noticia");
});

app.get('/noticias', (req, res) => {
    res.render("noticias/noticias");
});



app.listen(port, () => { console.log('Server running!!!'); });