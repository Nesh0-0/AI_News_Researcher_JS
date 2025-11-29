const { Sequelize } = require('sequelize');

const db = new Sequelize('AI_News_DB', 'root', 'rootuser', {
    host: 'localhost',
    dialect: 'mysql',
})


module.exports = db;