const express = require('express');
const ejs = require('ejs');


const app = express();
app.set('view engine', 'ejs');


app.get('/:nome/:lang', (req, res) => {
    
    const nome = req.params.nome;
    const lang = req.params.lang;
    const exibirMsg = false;
    const produtos = [
        {nome: 'Doritos', preco: 3.14},
        {nome: 'Coca-Cola', preco: 5},
        {nome: 'Leite', preco: 1.45}
    ]


    res.render('index', {
        nome: nome,
        lang: lang,
        empresa: 'Fantasy',
        inscritos: 8000,
        msg: exibirMsg,
        produtos: produtos
    });
})

app.listen(8080, () => {console.log('App rodando')});