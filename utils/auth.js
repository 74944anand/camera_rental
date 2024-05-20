const db = require("../models");
const { checkToken } = require("./token");

exports.checkAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const id = await checkToken(token);
    if (id) {
      const checkAuth = await db.token.findOne({ where: { userId: id } });
      if (!checkAuth) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      if (checkAuth.token === token) {
        return next();
      } else {
        return res.status(401).json({ message: "Unauthorized" });
      }
    }
    return res.status(401).json({ message: "Unauthorized" });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Unauthorized" });
  }
};
