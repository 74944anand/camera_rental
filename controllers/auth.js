const { checkUser } = require("../services/auth");

exports.checkAuth = async (req, res) => {
  try {
    const result = await checkUser(req.body);
    if (!result.status) {
      res.status(401).json(result);
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    res.send("Server Error");
  }
};
