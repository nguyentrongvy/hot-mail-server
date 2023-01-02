// @ts-check

const BaseModel = require("../../common/base-model");

const UserModel = new BaseModel({
  modelName: "User",
  options: {
    collection: "users",
  },
  schema: {
    username: {
      type: String,
      minlength: 1,
      maxlength: 100,
    },
    password: {
      type: String,
      minlength: 6,
      maxlength: 500,
    },
    salt: {
      type: String,
      maxlength: 500,
      minlength: 1,
      required: true,
    },
    email: {
      type: String,
      required: true,
      maxlength: 100,
      minlength: 1,
    },
  },
});

module.exports = UserModel;
