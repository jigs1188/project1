// tests/auth.test.js
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../index'); // Adjust the path as necessary
const User = require('../models/User');

beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('POST /api/signup', () => {
    beforeEach(async () => {
        await User.deleteMany({});
    });

    it('should create a new user', async () => {
        const res = await request(app)
            .post('/api/signup')
            .send({
                username: 'testuser',
                email: 'test@example.com',
                password: 'password',
                name: 'Test User'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('token');
    });

    it('should return 400 if user already exists', async () => {
        await new User({ username: 'testuser', email: 'test@example.com', password: 'password' }).save();
        const res = await request(app)
            .post('/api/signup')
            .send({
                username: 'testuser',
                email: 'test@example.com',
                password: 'password',
                name: 'Test User'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.body.message).toBe('Username or email already exists');
    });
});
