const bcrypt = require("bcrypt");
const db = require("../models");

exports.genratePassword = async (password) => {
  try {
    const pass = await bcrypt.hash(password, 10);
    if (!pass) {
      return false;
    }
    return pass;
  } catch (error) {
    console.log(error);
    return false;
  }
};

exports.comparePassword = async (password, pass) => {
  try {
    const isMatch = await bcrypt.compare(pass, password);
    if (!isMatch) {
      return false;
    }
    return isMatch;
  } catch (error) {
    console.log(error);
    return false;
  }
};
