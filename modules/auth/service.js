const crypto = require("crypto");

const userRepository = require("./repository");
const { setPassword, validPassword } = require("../../helpers/auth.helpers");
const { generateToken } = require("../../helpers/auth.helpers");

class UserService {
  getListUser(page, limit) {
    return userRepository.getMany({
      page,
      limit,
    });
  }

  async register({ userName, email, password }) {
    const salt = crypto.randomBytes(16).toString("hex");
    const hash = setPassword(password, salt);
    const user = await userRepository.getOne({
      where: {
        userName,
      },
    });

    if (user) {
      throw new Error("existed");
    }

    return userRepository.create({
      salt,
      email,
      username: userName,
      password: hash,
    });
  }

  async login({ userName, password }) {
    const user = await userRepository.getOne({
      where: {
        userName,
      },
    });

    if (!user) {
      throw new Error("email hoac password k dung");
    }

    const isValidPassWord = validPassword(password, user);

    if (!isValidPassWord) {
      throw new Error("email hoac password k dung");
    }

    user.token = await generateToken(user);

    return user;
  }
}

module.exports = new UserService();
