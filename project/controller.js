const { userList, taskList } = require('../data/data');

const getUsers = (req, res) => {
    res.json(userList);
};

const getTasks = (req, res) => {
    res.json(taskList);
};

const getMyTasks = (req, res) => {
    const userId = parseInt(req.params.userId);
    const userTasks = taskList.filter(task => task.assignedTo === userId);
    res.json(userTasks);
};

module.exports = {
    getUsers,
    getTasks,
    getMyTasks
}