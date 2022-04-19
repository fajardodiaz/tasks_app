const TaskModel = require('../models/TaskModel');

/* GET tasks listing. */
exports.getTasks = async (req, res, next) => {
    try {
        const tasks = await TaskModel.findAll()
        res.json(tasks);
    } catch (error) {
        res.json({
            "message": error.message
        });
    }
};

exports.getTaskByID = async (req, res, next) => {
    try {
        const task = await TaskModel.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(task);
    } catch (error) {
        res.json({
            "message": error.message
        });
    }
};

exports.addTask = async (req, res, next) => {
    try {
        await TaskModel.create(req.body);
        res.json({"message":"Task Created Succesfully"});
    } catch (error) {
        res.json({
            "message": error.message
        });
    }
};


exports.updateTask = async(req, res, next) => {
    try {
        await TaskModel.update(req.body, {
            where: {
                id: req.params.id
            }
        })
    } catch (error) {
        res.json({
            "message": error.message
        });
    }
};

exports.deleteTask = async (req, res, next) => {
    try {
        await TaskModel.destroy({
            where:{
                id: req.params.id
            }
        })
    } catch (error) {
        res.json({
            "message": error.message
        });
    }
};