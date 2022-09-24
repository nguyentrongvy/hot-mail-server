const { validate } = require('express-validation');

// const authMiddleware = require('../../middlewares/auth');
const { validatePost } = require('./validation');
const postController = require('./controller');

exports.load = app => {
    app.get(
        '/admin/posts',
        postController.getListPosts,
    );
    app.post(
        '/admin/posts',
        validate(validatePost(), {}, { abortEarly: false }),
        postController.create,
    );
    app.get(
        '/admin/posts/:id',
        postController.getPostById,
    );
    app.put(
        '/admin/posts/:id',
        postController.updatePostById,
    );
    app.delete(
        '/admin/posts/:id',
        postController.deletePostById,
    );
};
