const db = require("../../models");
const Product = db.product;
const ProductDetails = db.productDetails;

exports.createProduct = async (req, res) => {
  try {
    const result = await Product.create(req.body);
    const insertProduct_Details = await ProductDetails.create({
      productProductId: result.Product_Id,
    });

    // console.log("insertService_Details", insertService_Details);

    res.status(200).send({
      status: "Success",
      message: "Successfully create product",
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

exports.getAllProduct = async (req, res) => {
  try {
    const result = await Product.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got product",
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

/**
 * 1. Check if Email and password are given
 * 2. Load user with email
 * 3. if not user send res
 * 4. compare password
 * 5. if password not correct send res
 * 6. check if user is active
 * 7. if not active send res
 * 8. generate token
 * 9. send user and token
 */
