// @ts-check

const { tryCatchWrapper } = require('./wrapper');

class BaseController {
    constructor() {
        const methods = this._getAllMethods();
        methods.forEach(method => {
            this[method] = tryCatchWrapper(this[method]).bind(this);
        });
    }

    _getAllMethods() {
        // this trong class cha là gì (khi con kết thừa cha)
        const proto = Object.getPrototypeOf(this);
        return Object.getOwnPropertyNames(proto)
            .filter(m => typeof this[m] === 'function' && m !== 'constructor');
    }
}

module.exports = BaseController;
