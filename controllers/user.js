const {
  getUserById,
  addUser,
  getAllUsers,
  updateUserById,
  deleteUserById,
  updatePassword,
} = require("../services/user");

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
    const result = await addUser(req.body);
    if (!result.status) {
      res.status(400).json(result);
    }
    res.status(201).json(result);
  } catch (error) {
    res.status(500);
  }
};

exports.getAllUser = async (req, res) => {
  try {
    const result = await getAllUsers();
    if (!result.status) {
      res.status(400).json(result);
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500);
  }
};

exports.updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await updateUserById(id, req.body);
    if (!result.status) {
      res.status(400).json(result);
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500);
  }
};

exports.deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteUserById(id);
    if (!result.status) {
      res.status(400).json(result);
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500);
  }
};

exports.updateUserPassword = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await updatePassword(id, req.body);
    if (!result.status) {
      res.status(400).json(result);
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500);
  }
};
