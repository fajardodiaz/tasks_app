var express = require('express');
const { getTasks, getTaskByID, addTask, updateTask, deleteTask } = require('../controllers/tasksController');
var router = express.Router();


/* GET tasks */
router.get('/', getTasks);

/* GET task by id */
router.get('/:id',getTaskByID);

/* POST task */
router.post('/',addTask);

/* PUT task */
router.put('/:id', updateTask);

/* DELETE task */
router.delete('/:id',deleteTask);


module.exports = router;
