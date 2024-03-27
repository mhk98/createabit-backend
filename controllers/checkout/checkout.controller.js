const db = require("../../models");
const Checkout = db.checkout;

exports.createCheckout = async (req, res) => {
  try {
    // const { firstname, lastname, email, country, city, area, postcode, address, phone, company } = req.body;

    const result = await Checkout.create(req.body);

    res.status(200).send({
      status: "Success",
      message: "Successfully checkout",
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

exports.getCheckProduct = async (req, res) => {
  try {
    const result = await Checkout.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all Checkout",
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
