const db = require("../../models");
const Order = db.order;

exports.createOrder = async (req, res) => {
  try {
    // const { firstname, lastname, email, country, city, area, postcode, address, phone, company } = req.body;

    console.log("my order details here", req.body);
    const result = await Order.create(req.body);

    // console.log("insertService_Details", insertService_Details);

    res.status(200).send({
      status: "Success",
      message: "Successfully Order",
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

exports.getOrderProduct = async (req, res) => {
  try {
    const result = await Order.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all Order",
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

// exports.deleteCheckoutProduct = async (req, res) => {
//   try {
//     const { id } = req.params;
//     console.log("Delete product", id);
//     const result = await Cart.destroy({
//       where: {
//         Cart_Id: id,
//       },
//     });

//     res.status(200).send({
//       status: "Success",
//       message: "Successfully delete cart",
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
