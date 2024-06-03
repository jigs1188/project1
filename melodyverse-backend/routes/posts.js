// routes/posts.js
const express = require('express');
const Post = require('../models/Post');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/posts', auth, async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const posts = await Post.find()
        .populate('author', 'username')
        .skip((page - 1) * limit)
        .limit(limit)
        .exec();

    res.json(posts);
});

module.exports = router;

