const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
    const auth = req.headers.authorization;
    if (!auth) return res.status(401).json({ message: 'No token provided' });
    }
    const token = auth.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    };