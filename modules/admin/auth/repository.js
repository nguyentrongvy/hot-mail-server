// @ts-check

const BaseRepository = require('../../../common/base-repository');

class AuthRepository extends BaseRepository {
    constructor() {
        super('AdminUser');
    }
}

module.exports = new AuthRepository();
