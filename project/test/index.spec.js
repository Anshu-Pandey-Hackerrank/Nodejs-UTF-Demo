const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); 
const { userList, taskList } = require('../data/data');

chai.should();
chai.use(chaiHttp);

const adminUser = userList.find(user => user.role === 'admin');
const managerUser = userList.find(user => user.role === 'manager');
const internUser = userList.find(user => user.role === 'intern');


    describe('Routes Test Cases', () => {
        it('should get all users when authorized as admin', (done) => {
            chai.request(app)
                .get(`/${adminUser.userid}/users`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('array');
                    res.body.should.have.length(5);
                    done();
                });
        });

        it('should get tasks when authorized as manager', (done) => {
            chai.request(app)
                .get(`/${managerUser.userid}/tasks`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('array');
                    res.body.should.length(4)
                    done();
                });
        });

        it('should get tasks when authorized as admin', (done) => {
            chai.request(app)
                .get(`/${adminUser.userid}/tasks`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('array');
                    res.body.should.have.length(4);
                    done();
                });
        });

 
    });


    describe('Error Test Cases', () => {
            it('should return 404 if user not found', (done) => {
                chai.request(app)
                    .get('/9999/users') 
                    .end((err, res) => {
                        res.should.have.status(404);
                        res.body.should.deep.equal({ message: 'User not found' });
                        done();
                    });
            });
            
    });
    
    describe('Unauthorized Access', () => {
    
        it('should return 401 if intern tries to access users route', (done) => {
            chai.request(app)
                .get(`/${internUser.userid}/users`)
                .end((err, res) => {
                    res.should.have.status(401);
                    res.body.should.deep.equal({ message: 'Unauthorized Access'});
                    done();
                });
        });

    
        it('should return 401 if inter tries to access tasks route', (done) => {
            chai.request(app)
                .get(`/${internUser.userid}/tasks`) 
                .end((err, res) => {
                    res.should.have.status(401);
                    res.body.should.deep.equal({ message: 'Unauthorized Access'});
                    done();
                });
        });

        it('should return 401 if manager tries to access users route', (done) => {
            chai.request(app)
                .get(`/${managerUser.userid}/users`)
                .end((err, res) => {
                    res.should.have.status(401);
                    res.body.should.deep.equal({ message: 'Unauthorized Access'});
                    done();
                });
        });
    
    });
