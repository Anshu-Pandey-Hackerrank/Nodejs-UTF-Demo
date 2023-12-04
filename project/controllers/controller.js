const { userList, taskList } = require('../data/data');

const getUsers = (req, res) => {
    res.json(userList);
};

const getTasks = (req, res) => {
    res.json(taskList);
};


module.exports = {
    getUsers,
    getTasks,
}