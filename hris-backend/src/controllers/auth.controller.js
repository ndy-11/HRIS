const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const Role = require('../models/role.model');
const { signAccessToken, signRefreshToken } = require('../utils/jwt');
const { decode } = require('jsonwebtoken');

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email }, incluse: [{Role, as: 'role'}] });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });
    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) return res.status(401).json({ message: 'Invalid credentials' });

    const payload = { id: user.id, role: user.role ? user.role.name : 'user' }; 
    const accessToken = signAccessToken(payload);
    const refreshToken = signRefreshToken(payload);

    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        sameSite: 'lax',
        path: '/api/auth/refresh'
    });
    return res.json({
        accessToken,
        user: {
            id: user.id,
            email: user.email,
            role: payload.role
        }
    });
}
exports.refresh = async (req, res) => {
    const token = req.cookies.refreshToken;
    if (!token) return res.status(401).json({ message: 'No refresh token' });
    try {
        const decoded = require('jsonwebtoken').verify(token, process.env.JWT_REFRESH_SECRET);
        const newAccessToken = signAccessToken({ id: decoded.id, role: decoded.role });
        return res.json({ accessToken: newAccessToken });
    } catch (err) {
        return res.status(401).json({ message: 'Invalid refresh token' });
    }
};

exports.logout = (req, res) => {
    res.clearCookie('refreshToken', { path: '/api/auth/refresh' });
    return res.json({ message: 'Logged out successfully' });
};