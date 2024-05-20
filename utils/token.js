const jwt = require("jsonwebtoken");

const key = "anand";

exports.createToken = async (id) => {
  try {
    const token = await jwt.sign({ userId: id }, key, { expiresIn: "1h" });
    if (!token) {
      return false;
    }
    return token;
  } catch (err) {
    console.log(err);
    return false;
  }
};

exports.checkToken = async (token) => {
  try {
    const decode = await jwt.verify(token, key);
    return decode.userId;
  } catch (err) {
    return false;
  }
};
