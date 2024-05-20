const db = require("../models");
const { genratePassword } = require("../utils/encrypt");

exports.getUserById = async (id) => {
  try {
    const user = await db.user.findOne({ where: { id } });
    if (!user) {
      return {
        status: false,
        message: "User Not Found",
      };
    }
    const { firstName, lastName, email, phone, role } = user;
    return {
      status: true,
      message: "User Found",
      data: { firstName, lastName, email, phone, role },
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "Server Error",
    };
  }
};

exports.getAllUsers = async () => {
  try {
    const user = await db.user.findAll();
    if (!user) {
      return {
        status: false,
        message: "User Not Found",
      };
    }
    for (let i = 0; i < user.lenght; i++) {
      const { firstName, lastName, email, phone, role } = user[i];
      user[i] = { firstName, lastName, email, phone, role };
    }
    return {
      status: true,
      message: "User Found",
      data: user,
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "Server Error",
    };
  }
};

exports.addUser = async (body) => {
  try {
    const { firstName, lastName, email, password, phone, role } = body;
    const encrypted = await genratePassword(password);
    const user = await db.user.create({
      firstName,
      lastName,
      email,
      password: encrypted,
      phone,
      role,
    });
    if (!user) {
      return {
        status: false,
        message: "User Not Created",
      };
    }
    return {
      status: true,
      message: "User Created Successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "Server Error",
    };
  }
};

exports.updateUserById = async (id, body) => {
  try {
    const { firstName, lastName, email, phone, role } = body;
    const user = await db.user.update(
      { firstName, lastName, email, phone, role },
      { where: { id } }
    );
    if (!user) {
      return {
        status: false,
        message: "User Not Found",
      };
    }
    return {
      status: true,
      message: "User Updated",
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "Server Error",
    };
  }
};

exports.updatePassword = async (id, body) => {
  try {
    const { oldPassword, newPassword } = body;
    const user = await db.user.findOne({ where: { id } });
    if (!user) {
      return {
        status: false,
        message: "User Not Found",
      };
    }
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return {
        status: false,
        message: "Password Does Not Match",
      };
    }
    const password = await genratePassword(newPassword);
    const updatedUser = await db.user.update({ password }, { where: { id } });
    if (!updatedUser) {
      return {
        status: false,
        message: "Password Not Updated",
      };
    }
    return {
      status: true,
      message: "Password Updated",
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "Server Error",
    };
  }
};

exports.deleteUserById = async (id) => {
  try {
    const user = await db.user.destory({ where: { id } });
    if (!user) {
      return {
        status: false,
        message: "User Not Deleted",
      };
    }
    return {
      status: true,
      message: "User Deleted",
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "Server Error",
    };
  }
};
