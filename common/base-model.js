// @ts-check

const mongoose = require('mongoose');
// const crypto = require('crypto');

const Common = require('../constants/common');

class BaseModel {
    constructor({ modelName, options, schema }) {
        const defaultOptions = {
            timestamps: true,
            collation: { locale: 'vi' },
        };

        this.options = {
            ...defaultOptions,
            options,
        };

        this.modelName = modelName;
        this.schema = {
            ...schema,
            isActive: {
                type: String,
                enum: Object.values(Common.STATUS),
                default: Common.STATUS.ACTIVE,
            },
        };

        this.init();
    }

    init() {
        const schema = new mongoose.Schema(this.schema, this.options);

        // if (this.modelName === 'AdminUser') {
        //     schema.methods.setPassword = password => {
        //         this.salt = crypto.randomBytes(16).toString('hex');

        //         this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
        //     };

        //     schema.methods.validPassword = password => {
        //         const hash = crypto.pbkdf2Sync(password, this.schema.salt, 1000, 64, 'sha512').toString('hex');

        //         return this.schema.hash === hash;
        //     };
        // }

        return mongoose.model(this.modelName, schema);
    }
}

module.exports = BaseModel;
