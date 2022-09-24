// @ts-check

// import modules
const authAPI = require('../modules/auth/express-api');
const postAPI = require('../modules/post/express-api');
const adminPostAPI = require('../modules/admin/post/express-api');
const adminAuthAPI = require('../modules/admin/auth/express-api');

module.exports = app => {
    // import api
    authAPI.load(app);
    postAPI.load(app);
    adminPostAPI.load(app);
    adminAuthAPI.load(app);
};
