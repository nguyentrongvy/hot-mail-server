// @ts-check

const { Joi } = require('express-validation');

exports.validateAuth = () => ({
    body: Joi.object({
        userName: Joi.string().required(),
        email: Joi.string().required(),
        fullName: Joi.string().required(),
        password: Joi.string().required(),
    }),
});
