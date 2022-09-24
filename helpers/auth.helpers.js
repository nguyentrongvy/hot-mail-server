const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const privateKey = 'qwertyuiopasdfghjklzxcvbnm0123456789';
const publicKey = 'qwertyuiopasdfghjklzxcvbnm0123456789';

exports.setPassword = (password, salt) => crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');

exports.validPassword = (password, user) => {
    const hash = crypto.pbkdf2Sync(password, user.salt, 1000, 64, 'sha512').toString('hex');

    return hash === user.password;
};

exports.generateToken = (data, options = {}) => {
    const initData = {
        // algorithm: 'RS256',
        expiresIn: 60 * 60 * 24 * 30, // 30 days
    };
    const newOptions = { ...initData, ...options };

    return jwt.sign(data, privateKey, newOptions);
};

exports.verifyToken = (token, options = {}) => jwt.verify(token, publicKey, options);
