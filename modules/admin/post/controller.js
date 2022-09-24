// @ts-check

const BaseController = require('../../../common/base-controller');
const postService = require('./service');

class PostController extends BaseController {
    async getListPosts(req, res) {
        const { page, length } = req.query;
        const { total, posts } = await postService.getListPosts({ page, length });

        return res.json({
            success: true,
            total,
            data: posts,
        });
    }

    async create(req, res) {
        const {
            title,
            content,
        } = req.body;

        const result = await postService.create({ title, content });
        res.success(result);
    }

    async getPostById(req, res) {
        const id = req.params.id;

        const result = await postService.getPostById(id);
        res.success(result);
    }

    async updatePostById(req, res) {
        const id = req.params.id;
        const data = req.body;

        const result = await postService.updatePostById(id, data);
        res.success(result);
    }

    async deletePostById(req, res) {
        const id = req.params.id;

        const result = await postService.deletePostById(id);
        res.success(result);
    }
}

module.exports = new PostController();
