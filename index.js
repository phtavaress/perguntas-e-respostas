const express = require('express');
const bp = require('body-parser');
const bodyParser = require('body-parser');
const connection = require('./database/database');


// Database
connection
    .authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados feita sucesso!');
    })
    .catch((erro) => {
        console.log(erro);
    });


const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/perguntar', (req, res) => {
    res.render('perguntar');
});

app.post('/salvar', (req, res) => {
    const titulo = req.body.titulo;
    const descricao = req.body.descricao;
    console.log('Formulário recebido!\nTítulo: ' + titulo + '\nDescrição:' + descricao);
    res.send('Formulário recebido!');
});

app.listen(8080, () => {console.log('App rodando')});