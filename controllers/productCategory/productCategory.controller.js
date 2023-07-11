// const { createResponse } = require("../../utils/responseGenerator");
const db = require("../../models");
const ProductCategory = db.productCategory;

// console.log(User)

exports.updateProductCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const productInfo = req.body;
    const result = await ProductCategory.update(productInfo, {
      where: { productProductId: id },
    });

    res.status(200).send({
      status: "Success",
      message: "Successfully update product details",
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

exports.getSingleProductCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await ProductCategory.findOne({
      where: { productProductId: id },
    });

    // console.log("insertService_Details", insertService_Details);

    res.status(200).send({
      status: "Success",
      message: "All product category here",
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
