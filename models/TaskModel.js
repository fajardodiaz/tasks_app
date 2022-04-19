const { DataTypes } = require('sequelize');
const db = require('../database/db');

const TaskModel = db.define('Task',{
    title:{
        type: DataTypes.STRING,
        allowNull:false
    },
    description:{
        type: DataTypes.STRING,
        allowNull:true
    },
    createdAt:{
        type: DataTypes.DATE
    },
    updatedAt:{
        type: DataTypes.DATE
    }
});

module.exports =  TaskModel;
