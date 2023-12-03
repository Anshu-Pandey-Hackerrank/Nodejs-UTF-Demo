const userList = [
    {
        name:"Alex",
        userid:1,
        role: 'intern'
    },
    {
        name: "Riley",
        userid:2,
        role:'manager'
    },
    {
        name:'Carry',
        userid:3,
        role:'intern'
    },
    {
        name:'Divine',
        userid:4,
        role:'intern'
    },
    {
        name:'Sam',
        userid:5,
        role:'admin'
    }
]

const taskList = [
    {
        id:100,
        description:'Edit Commit Messages of the latest commit',
        status:'ongoing',
        assignedTo: 1                  
    },
    {
        id:137,
        description:'fix ui bugs on contact page',
        status:'completed',
        assignedTo:4
    },
    {
        id:92,
        description:'practices for Scalability of backend database',
        status:'ongoing',
        assignedTo:3
    },
    {
        id:106,
        description:'apply remote flags on home page',
        status:'ongoing',
        assignedTo:1
    }
]

module.exports = {
    userList,
    taskList
};