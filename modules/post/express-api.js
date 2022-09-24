const { validate } = require('express-validation');

// const authMiddleware = require('../../middlewares/auth');
const { validatePost } = require('./validation');
const postController = require('./controller');

exports.load = app => {
    app.get(
        '/posts',
        postController.getListPosts,
    );
    // app.post(
    //     '/posts',
    //     validate(validatePost(), {}, { abortEarly: false }),
    //     postController.create,
    // );
    app.get(
        '/posts/:id',
        postController.getPostById,
    );
    // app.put(
    //     '/posts/:id',
    //     postController.updatePostById,
    // );

    app.get(
        '/binance',
        postController.getInfoBinance,
    );
};
