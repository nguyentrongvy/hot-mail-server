const BaseController = require("../../../common/base-controller");
const authService = require("./service");

class AuthController extends BaseController {
  async register(req, res) {
    const { userName, email, fullName, password } = req.body;

    const user = await authService.register({
      userName,
      email,
      fullName,
      password,
    });

    return res.json({
      success: true,
      data: user,
    });
  }

  async login(req, res) {
    const { userName, password } = req.body;

    const user = await authService.login({ userName, password });

    res.cookie("access_token", user.token, {
      maxAge: 365 * 24 * 60 * 60 * 100,
      httpOnly: true,
    });

    // res.cookie('userName', 'vy', {

    // });

    return res.json({
      success: true,
      data: user,
    });
  }
}

module.exports = new AuthController();
