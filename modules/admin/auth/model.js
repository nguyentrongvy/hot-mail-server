// @ts-check

const BaseModel = require('../../../common/base-model');

const UserModel = new BaseModel({
    modelName: 'AdminUser',
    options: {
        conllection: 'admin-users',
    },
    schema: {
        userName: {
            type: String,
            required: true,
            maxlength: 100,
            minlength: 1,
        },
        email: {
            type: String,
            required: true,
            maxlength: 100,
            minlength: 1,
        },
        fullName: {
            type: String,
            required: true,
            maxlength: 100,
            minlength: 1,
        },
        password: {
            type: String,
            required: true,
            maxlength: 500,
            minlength: 1,
        },
        salt: {
            type: String,
            maxlength: 500,
            minlength: 1,
            required: true,
        },
    },
});

module.exports = UserModel;
