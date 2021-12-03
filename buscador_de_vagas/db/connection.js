/*sqlize é uma aplicação para utilizarmos bancos RELACIONAIS
com o node*/
const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./db/app.db" /*vai criar um banco de dados aqui*/
});

/*como estamos trab em um arquivo externo (app.js) temos que exportar
já que essa é nosso arquivo de configuração do banco*/
module.exports = sequelize;