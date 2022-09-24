// @ts-check

const BaseRepository = require('../../../common/base-repository');

class PostRepository extends BaseRepository {
    constructor() {
        super('Post');
    }
}

module.exports = new PostRepository();
