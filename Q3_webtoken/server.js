
const express = require('express');
const jwt = require('jsonwebtoken');

const verifyToken = require('./middleware/auth');

const app = express();

const SECRET_KEY = 'my_secret_key_123';

app.use(express.json());
app.use(express.static('public'));

// Demo user credentials
const user = {
    username: 'ajay',
    password: '12345'
};

// POST login API
app.post('/login', (req, res) => {

    const { username, password } = req.body;

    // Verify username and password
    if (username !== user.username ||
        password !== user.password) {

        return res.status(401).json({
            message: "Invalid username or password"
        });
    }

    // Generate JWT token
    const token = jwt.sign(
        { username: username },
        SECRET_KEY,
        { expiresIn: '1h' }
    );

    res.json({
        message: "Login successful",
        token: token
    });

});

// Protected profile API
app.get('/profile', verifyToken, (req, res) => {

    res.json({
        message: "Welcome to your profile",
        username: req.user.username,
        email: "ajay@gmail.com",
        course: "Node.js"
    });

});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
