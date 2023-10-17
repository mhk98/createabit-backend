const db = require("../../models");
const Cart = db.cart;

exports.createCart = async (req, res, file) => {
  try {
    const { title, price, image } = req.body;
    console.log(req.body);
    const data = {
      title: title,
      price: price,
      image: image,
    };
    const result = await Cart.create(data);

    // console.log("insertService_Details", insertService_Details);

    res.status(200).send({
      status: "Success",
      message: "Successfully add to cart",
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

exports.getCartProduct = async (req, res) => {
  try {
    const result = await Cart.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all cart",
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
exports.deleteCartProduct = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Delete product", id);
    const result = await Cart.destroy({
      where: {
        Cart_Id: id,
      },
    });

    res.status(200).send({
      status: "Success",
      message: "Successfully delete cart",
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
