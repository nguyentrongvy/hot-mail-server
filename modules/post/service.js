// @ts-check

const postRepository = require('./repository');

class PostService {
    async getListPosts() {
        // const condition = {};

        // const [total, posts] = await Promise.all([
        //     postRepository.count(condition),
        //     postRepository.getMany({
        //         page,
        //         where: condition,
        //         limit: parseInt(length),
        //     }),
        // ]);

        return postRepository.getAll();

        // return { total, posts };
    }

    async getPostById(id) {
        const option = {
            where: {
                _id: id,
            },
        };

        return postRepository.getOne(option);
    }
}

module.exports = new PostService();
