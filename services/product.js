const db = require("../models");

exports.getProductById = async (id) => {
  try {
    const product = await db.product.findOne({ where: { id } });
    if (!product) {
      return {
        status: false,
        message: "Product not found",
      };
    }
    return {
      status: true,
      product,
    };
  } catch (error) {
    return {
      status: false,
      message: "Something went wrong",
    };
  }
};

exports.getAllProducts = async () => {
  try {
    const product = await db.product.findAll();
    if (!product) {
      return {
        status: false,
        message: "Products not found",
      };
    }
    return {
      status: true,
      product,
    };
  } catch (error) {
    return {
      status: false,
      message: "Something went wrong",
    };
  }
};
exports.addProduct = async (body, file) => {
  try {
    const { id, name, price, isAvailable } = body;
    const response = await db.product.create({
      name,
      price,
      image: file.path,
      isAvailable,
    });
    if (!response) {
      return {
        status: false,
        message: "Product not Added",
      };
    }
    return {
      status: true,
      message: "Product Added Sucessfully",
    };
  } catch (error) {
    return {
      status: false,
      message: "Something went wrong",
    };
  }
};
exports.updateProduct = async (id, body, file) => {
  try {
    const { name, price, isAvailable} = body;
    const response = await db.product.update(
      { name, price, image:file.path, isAvailable },
      { where: { id } }
    );
    if (!response) {
      return {
        status: false,
        message: "Product not found",
      };
    }
    return {
      status: true,
      message: "Product Updated Succesfully",
    };
  } catch (error) {
    return {
      status: false,
      message: "Something went wrong",
    };
  }
};
exports.deleteProduct = async (id) => {
  try {
    const response = await db.product.destroy({ where: { id } });
    if (!response) {
      return {
        status: false,
        message: "Product not found",
      };
    }
    return {
      status: true,
      message: "Product Deleted Succesfully",
    };
  } catch (error) {
    return {
      status: false,
      message: "Something went wrong",
    };
  }
};
