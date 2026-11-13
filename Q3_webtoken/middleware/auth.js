
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'my_secret_key_123';

// Authentication middleware
function verifyToken(req, res, next) {

    // Get Authorization header
    const authHeader = req.headers.authorization;

    // Check whether token exists
    if (!authHeader) {
        return res.status(401).json({
            message: "Access denied. Token is missing!"
        });
    }

    // Check Bearer scheme
    const parts = authHeader.split(' ');

    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return res.status(401).json({
            message: "Use Bearer token format"
        });
    }

    const token = parts[1];

    // Verify token
    jwt.verify(token, SECRET_KEY, (err, user) => {

        if (err) {
            return res.status(403).json({
                message: "Invalid or expired token"
            });
        }

        req.user = user;

        next();
    });
}

module.exports = verifyToken;
