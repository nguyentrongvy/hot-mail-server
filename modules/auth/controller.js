// @ts-check
const BaseController = require("../../common/base-controller");
const { addJob } = require("../../jobs");
const { QUEUE } = require("../../constants/queue");

// dependencies
const userBusiness = require("./business");
const userService = require("./service");

class AuthController extends BaseController {
  async getListUsers(req, res) {
    const { page, limit } = req.query;

    const result = await userBusiness.getListUser(page, limit);
    await addJob(QUEUE.Ping, { time: new Date() });
    res.success(result);
  }

  async register(req, res) {
    const { userName, email, password } = req.body;
    const result = await userService.register({ userName, email, password });

    res.success(result);
  }

  async login(req, res) {
    const { userName, password } = req.body;
    const user = await userService.login({ userName, password });

    res.success(user);
  }
}

module.exports = new AuthController();
