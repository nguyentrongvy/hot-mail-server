// @ts-check

const { Joi } = require('express-validation');

exports.validatePost = () => ({
    body: Joi.object({
        title: Joi.string().required(),
        content: Joi.string().required(),
    }),
});

// exports.validatePost = () => ({
//     body: Joi.object({
//         title: Joi.required(),
//     }),
// });
