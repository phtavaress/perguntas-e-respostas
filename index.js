const express = require('express');
const ejs = require('ejs');


const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/perguntar', (req, res) => {
    res.render('perguntar');
});

app.post('/salvar', (req, res) => {
    console.log('Formulário recebido!')
    res.send('Formulário recebido!');
});

app.listen(8080, () => {console.log('App rodando')});