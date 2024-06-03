// index.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// index.js
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');

app.use('/api', authRoutes);
app.use('/api', postRoutes);

// index.js
const rateLimiter = require('./middleware/rateLimiter');

app.use('/api/', rateLimiter);


dotenv.config();
// index.js
const passwordResetRoutes = require('./routes/passwordReset');
app.use('/api', passwordResetRoutes);


const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
	
