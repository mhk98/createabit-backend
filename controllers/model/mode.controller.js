const db = require("../../models");
const Model = db.model;

exports.createModel = async (req, res, file) => {
  try {
    const { Name } = req.body;
    const data = {
      Name: Name,
      image: req.file.path,
    };
    const result = await Model.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully create Model",
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

exports.getSingleModel = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Model.findOne({
      where: {
        Category_Id: id,
      },
    });

    res.status(200).send({
      status: "Success",
      message: "Successfully got Model",
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

exports.getAllModel = async (req, res) => {
  try {
    const result = await Model.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully All got Model",
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
exports.updateModel = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Model.update({
      where: {
        Category_Id: id,
      },
    });

    res.status(200).send({
      status: "Success",
      message: "Successfully update Model",
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
exports.deleteModel = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Model.destroy({
      where: {
        Category_Id: id,
      },
    });

    res.status(200).send({
      status: "Success",
      message: "Successfully delete Model",
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
