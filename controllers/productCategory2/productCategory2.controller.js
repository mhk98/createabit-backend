// const { createResponse } = require("../../utils/responseGenerator");
const db = require("../../models");
const ProductCategory2 = db.productCategory2;
const ProductDetails2 = db.productDetails2;

// console.log(User)

// exports.updateProductCategory = async (req, res, file) => {
//   try {
//     const { id } = req.params;
//     const { title, text } = req.body;
//     const data = {
//       title: title,
//       text: text,
//       image: req.file.path,
//     };

//     const result = await ProductCategory.update(data, {
//       where: { productProductId: id },
//     });

//     res.status(200).send({
//       status: "Success",
//       message: "Successfully update product details",
//       data: result,
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: "fail",
//       message: "Something went wrong",
//       error: error.message,
//     });
//   }
// };
exports.insertProductCategory = async (req, res, file) => {
  try {
    const { id } = req.params;
    const { title, text } = req.body;
    const data = {
      title: title,
      text: text,
      image: req.file.path,
      productProductId: id,
    };

    const result = await ProductCategory2.create(data);

    const insertShop = await ProductDetails2.create({
      productCategoryProductCategoryId: result.productCategory_Id,
    });

    res.status(200).send({
      status: "Success",
      message: "Successfully insert product details",
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

exports.getAllProductCategory = async (req, res) => {
  try {
    const result = await ProductCategory2.findAll();

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
// exports.getSingleProductCategory = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const result = await ProductCategory.findOne({
//       where: { productProductId: id },
//     });

//     // console.log("insertService_Details", insertService_Details);

//     res.status(200).send({
//       status: "Success",
//       message: "Single product category here",
//       data: result,
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: "fail",
//       message: "Something went wrong",
//       error: error.message,
//     });
//   }
// };
