const request = require('supertest');
const app = require('../app'); 
const User = require('../models/User'); 

describe('User API Tests', () => {
    
    beforeEach(async () => {
        await User.deleteMany({}); 
        });

    it('should register a new user', async () => {
        const res = await request(app)
            .post('/users/register')
            .send({
                email: `testuser${Date.now()}@example.com`, 
                username: 'testuser',
                password: 'password123',
                role: 'teacher'

            });
            
        expect(res.statusCode).toEqual(201);       
        expect(res.body).toHaveProperty('user');   
        expect(res.body.user.email).toContain('@example.com'); 
    });

    it('should login a user', async () => {
      
        const registerRes = await request(app)
            .post('/users/register')
            .send({
                email: `testuser${Date.now()}@example.com`, 
                username: 'testuser',
                password: 'password123',
                role: 'teacher'
            });
        
        expect(registerRes.statusCode).toEqual(201); 
     
        const loginRes = await request(app)
            .post('/users/login')
            .send({
                email: registerRes.body.user.email,
                password: 'password123'
            });
        
        expect(loginRes.statusCode).toEqual(200);
        expect(loginRes.body).toHaveProperty('token');
    });
});