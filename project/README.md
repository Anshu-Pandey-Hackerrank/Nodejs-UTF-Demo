## Role Based Auth

### Data

Example of single User 

```
{
  name:"Alex",
  userid:1,
  role: "intern"
}
```

Example of Single task

```
{
  id:100,
  description:'Edit Commit Messages of the latest commit',
  status:"Ongoing"
   assignedTo: 1      
}
```

## Project Specifications 

You are a Node.js developer working for a technology company that is developing a task management system for its internal teams. The application will allow users with different roles to manage tasks, collaborate on projects, and track their progress. As part of the development process, you are tasked with implementing role-based authorization using middleware for the API endpoints.

There are 3 roles in the Company
 - Admin
 - Manager
 - Intern

_Base API URL_ .;userId/{otherParameters}
 - The User ID is being passed in every request to track down the User from the User list and to determine the Role of the user
 - You have to make use of this functionality while implementing the middleware


You are required to complete 3 Controller and 1 middleware function for the proper functioning of the app

  - getUser() - Responds with the list of all users to the authorized roles
  - getTasks() - Responds with the list of all Tasks to the authorized roles

The middleware.js will serve as a role-based authorization middleware for the given API endpoints. The middleware should ensure that each endpoint is accessible only to users with the appropriate roles as specified in the data provided.

The exported function should be an Express.js middleware that implements the following functionalities:

- Implement the logic for allowing roles to access the endpoints
- Should respond with the status code 404 and body {message: "User not found"} on invalid user ID request
- Should respond with the status code 401 and body {message: "Unauthorized Acces"} on invalid requests

 
**GET** request to `/:userId/users`:

- Only users with the role "admin" should have access to view the list of all users.

**GET** request to `/:userId/tasks`:

- Users with roles "admin" or "manager" should be able to access this endpoint to view the list of all tasks.


## Environment
- Node Version: v14(LTS)
- Default Port: 8000

**Read Only Files**
- `test/*.spec.js`
- `data/data.js`


**Commands**
- run: 
```bash
npm start
```
- install: 
```bash
npm install
```
- test: 
```bash
npm test
```

