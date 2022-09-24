// @ts-check

const BaseModel = require('../../../common/base-model');

const PostModel = new BaseModel({
    modelName: 'Post',
    options: {
        collection: 'posts',
    },
    schema: {
        title: {
            type: String,
            // minlength: 1,
            maxlength: 200,
        },
        content: {
            type: String,
            minlength: 1,
            // maxlength: 5000,
        },
    },
});

module.exports = PostModel;
