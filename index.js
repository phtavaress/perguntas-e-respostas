const express = require('express');
const ejs = require('ejs');


const app = express();
app.set('view engine', 'ejs');


app.get('/:nome/:lang', (req, res) => {
    const nome = req.params.nome;
    const lang = req.params.lang;
    res.render('index', {
        nome: nome,
        lang: lang,
        empresa: 'Fantasy',
        inscritos: 8000
    });
})

app.listen(8080, () => {console.log('App rodando')});