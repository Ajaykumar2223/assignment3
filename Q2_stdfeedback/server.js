
const express = require('express');

const app = express();

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// Serve HTML and CSS files
app.use(express.static('public'));

// Handle POST request
app.post('/feedback', (req, res) => {

    const { name, email, course, feedback } = req.body;

    // Server-side validation
    if (!name || !email || !course || !feedback ||
        !name.trim() || !email.trim() ||
        !course.trim() || !feedback.trim()) {

        return res.status(400).send(
            "400 Bad Request: All fields are required!"
        );
    }

    // Redirect after successful submission
    res.redirect('/thankyou');

});

// Thank you page
app.get('/thankyou', (req, res) => {

    res.send(`
        <h1>Thank You!</h1>
        <p>Your feedback has been submitted successfully.</p>
        <a href="/">Go Back</a>
    `);

});

// Handle unknown URLs (404)
app.use((req, res) => {

    res.status(404).sendFile(
        __dirname + '/public/404.html'
    );

});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
