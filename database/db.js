const {Sequelize} = require('sequelize');

const db = new Sequelize(
    'tasks_db', 'pablo', 'abc123', {
        host: 'localhost',
        dialect:'mysql',
    }
);

module.exports = db;