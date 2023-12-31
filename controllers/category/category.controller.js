const db = require("../../models");
const Category = db.category;

exports.createCategory = async (req, res, file) => {
  try {
    const { Name, Stock } = req.body;
    const data = {
      Name: Name,
      Stock: Stock,
      Image: req.file.path,
    };
    console.log("createCategory", data);

    const result = await Category.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully create Category",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.getSingleCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Category.findOne({
      where: {
        Category_Id: id,
      },
    });

    res.status(200).send({
      status: "Success",
      message: "Successfully got category",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.getAllCategory = async (req, res) => {
  try {
    const result = await Category.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got category",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.updateCategory = async (req, res, file) => {
  try {
    const { id } = req.params;
    const { Name, Stock } = req.body;

    const data = {
      Name: Name,
      Stock: Stock,
      Image: req.file.path,
    };
    console.log("updateCategory", data);
    const result = await Category.update(data, {
      where: {
        Category_Id: id,
      },
    });

    res.status(200).send({
      status: "Success",
      message: "Successfully update category",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Category.destroy({
      where: {
        Category_Id: id,
      },
    });

    res.status(200).send({
      status: "Success",
      message: "Successfully delete category",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
