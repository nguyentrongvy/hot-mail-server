// @ts-check

const postRepository = require('./repository');

class PostService {
    async getListPosts({
        page,
        length,
    }) {
        const condition = {};

        const [total, posts] = await Promise.all([
            postRepository.count(condition),
            postRepository.getMany({
                page,
                where: condition,
                limit: parseInt(length),
            }),
        ]);

        return { total, posts };
    }

    async create({
        title,
        content,
    }) {

        return postRepository.create({
            title,
            content,
        });
    }

    async getPostById(id) {
        const option = {
            where: {
                _id: id,
            },
        };

        return postRepository.getOne(option);
    }

    async updatePostById(id, data) {
        const condition = {
            where: {
                title: data.title,
                _id: { $ne: id },
            },
        };

        const course = await postRepository.getOne(condition);
        if (course) {
            throw new Error('POST_IS_EXIST');
        }

        const option = {
            where: {
                _id: id,
            },
            data,
        };

        return postRepository.updateOne(option);
    }

    async deletePostById(id) {
        return postRepository.deleteOne({
            _id: id,
        });
    }
}

module.exports = new PostService();
