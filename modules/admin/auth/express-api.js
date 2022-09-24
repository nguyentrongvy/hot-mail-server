const { validate } = require('express-validation');

const { validateAuth } = require('./validation');
const authController = require('./controller');

exports.load = app => {
    app.post(
        '/admin/register',
        validate(validateAuth(), {}, { abortEarly: false, allowUnknown: true }),
        authController.register,
    );
    app.post(
        '/admin/login',
        authController.login,
    );
};
