const db = require("../../models");
const Cart = db.cart;
const User = db.user;

exports.createCart = async (req, res, file) => {
  try {
    const { title, price, Image, usertblUserID } = req.body;
    console.log("cartDetailsProduct", req.body);

    const data = {
      title: title,
      price: price,
      Image: Image,
      usertblUserID: usertblUserID,
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
    const id = req.params.id;
    // const findUser = await User.findOne({ where: { User_ID: id } });

    // console.log("findUser", findUser);
    const result = await Cart.findAll({
      where: { usertblUserID: id },
    });

    console.log("Id here", id);
    console.log(result);
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
