const { getUserById, addUser } = require("../services/user");

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getUserById(id);
    if (!result.status) {
      res.status(400).json(result);
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500);
  }
};

exports.addUser = async (req, res) => {
  try {
    console.log(req.body);
    const result = await addUser(req.body);
    if (!result.status) {
      res.status(400).json(result);
    }
    res.status(201).json(result);
  } catch (error) {
    res.status(500);
  }
};
