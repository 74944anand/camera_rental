const db = require("../models");
const { comparePassword } = require("../utils/encrypt");
const { createToken } = require("../utils/token");

exports.checkUser = async (body) => {
  try {
    const { email, password } = body;
    const checkUser = await db.user.findOne({ where: { email } });
    if (!checkUser) {
      return {
        status: false,
        message: "User not found",
      };
    }
    const { firstName, lastName, phone, role } = checkUser;
    if (await comparePassword(checkUser.password, password)) {
      const checkToken = await db.token.findOne({
        where: { userId: checkUser.id },
      });
      if (checkToken) {
        await db.token.destroy({ where: { userId: checkUser.id } });
      }
      const token = await createToken(checkUser.id);
      const result = await db.token.create({
        userId: checkUser.id,
        token,
      });
      if (!result) {
        return {
          status: false,
          message: "Token not created",
        };
      }
      return {
        status: true,
        message: "Login Successful",
        token,
        data: {
          firstName,
          lastName,
          email,
          phone,
          role,
        },
      };
    }
    return {
      status: false,
      message: "Password is incorrect",
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "Server Error",
    };
  }
};
