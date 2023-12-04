const { userList , taskList} = require("./data/data");

const authorize = (allowedRoles) => {
    return (req, res, next) => {
        const userId = parseInt(req.params.userId); 
        
        const user = userList.find(user => user.userid === userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        const userRole = user.role;
        
        if (allowedRoles.includes(userRole)) {
            next();
        } else {
            res.status(401).json({ message: 'Unauthorized Access' });
        }
    };
};

module.exports = authorize