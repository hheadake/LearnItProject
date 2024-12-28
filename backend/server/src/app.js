const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { auth } = require('./middleware/authMiddleware');
const routes = require('./routes');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();

mongoose.connect('mongodb://localhost:27017/mydb')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// Middleware configuration
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());  // Преместен тук
app.use(auth);
app.use(routes);

app.get('/', (req, res) => {
    console.log('Hey');
    res.send('Im listening');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;