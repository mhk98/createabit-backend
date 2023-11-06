const db = require("../../models");
const SubCategory = db.subCategory;

exports.createSubCategory = async (req, res, file) => {
  try {
    const { Name } = req.body;
    const data = {
      Name: Name,
      image: req.file.path,
    };
    const result = await SubCategory.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully create SubCategory",
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

exports.getSingleSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await SubCategory.findOne({
      where: {
        Category_Id: id,
      },
    });

    res.status(200).send({
      status: "Success",
      message: "Successfully got SubCategory",
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

exports.getAllSubCategory= async (req, res) => {
  try {
    const result = await SubCategory.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully All got SubCategory",
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
exports.updateSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await SubCategory.update({
      where: {
        Category_Id: id,
      },
    });

    res.status(200).send({
      status: "Success",
      message: "Successfully update SubCategory",
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
exports.deleteSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await SubCategory.destroy({
      where: {
        Category_Id: id,
      },
    });

    res.status(200).send({
      status: "Success",
      message: "Successfully delete SubCategory",
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
