// const { createResponse } = require("../../utils/responseGenerator");
const db = require("../../models");
const ProductDetails3 = db.productDetails3;

// console.log(User)

exports.updateProductDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const productInfo = req.body;
    const result = await ProductDetails3.update(productInfo, {
      where: { productCategoryProductCategoryId: id },
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

exports.getSingleProductDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await ProductDetails3.findOne({
      where: { productProductId: id },
    });

    // console.log("insertService_Details", insertService_Details);

    res.status(200).send({
      status: "Success",
      message: "All product details here",
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
