const Sequelize = require('sequelize');

const connection = new Sequelize('perguntas-e-respostas', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;