// @ts-check
const crypto = require("crypto");

const authRepository = require("./repository");
const { setPassword, validPassword } = require("../../../helpers/auth.helpers");
const { generateToken } = require("../../../helpers/auth.helpers");

class AuthService {
  async register({ userName, email, fullName, password }) {
    const salt = crypto.randomBytes(16).toString("hex");
    const hash = setPassword(password, salt);
    const user = await authRepository.getOne({
      where: {
        email,
      },
    });

    if (user) {
      throw new Error("existed");
    }

    return authRepository.create({
      salt,
      email,
      userName,
      fullName,
      password: hash,
    });
  }

  async login({ userName, password }) {
    const user = await authRepository.getOne({
      where: {
        userName,
      },
    });

    if (!user) {
      throw new Error("email hoac password k dung");
    }

    const isValidPassWord = validPassword(password, user);

    if (!isValidPassWord) {
      throw new Error("email hoac password k dung 111");
    }

    user.token = await generateToken(user);

    return user;
  }
}

module.exports = new AuthService();
