// tests/posts.test.js
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../index'); // Adjust the path as necessary
const User = require('../models/User');
const Post = require('../models/Post');
const jwt = require('jsonwebtoken');

beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('GET /api/posts', () => {
    let token;
    beforeEach(async () => {
        await User.deleteMany({});
        await Post.deleteMany({});
        const user = await new User({ username: 'testuser', email: 'test@example.com', password: 'password' }).save();
        token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    });

    it('should return posts', async () => {
        await new Post({ title: 'Test Post', content: 'Test Content', author: mongoose.Types.ObjectId() }).save();
        const res = await request(app)
            .get('/api/posts')
            .set('Authorization', `Bearer ${token}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBe(1);
    });

    it('should return 401 if no token provided', async () => {
        const res = await request(app).get('/api/posts');
        expect(res.statusCode).toEqual(401);
        expect(res.body.message).toBe('Access denied, no token provided');
    });
});
