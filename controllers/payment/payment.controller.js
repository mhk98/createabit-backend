const db = require("../../models");
const Payment = db.payment;
const stripe = require("stripe")(
  "sk_test_51L1rVDH0VF27tpW3cFhVXSe0s43AQkrOboj4xD4RRDczUOseBKp6B1r238F8ZhRS9QqqANJmyKO87u3SnLBnxCNo003tHruAWJ"
);

exports.createPayment = async (req, res) => {
  try {
    const { Price } = req.body;
    const amount = Price * 100;

    console.log(req.body);

    console.log("price of payment", amount);
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    // const result = await Payment.create(req.body);

    res.send({ clientSecret: paymentIntent.client_secret });

    // res.status(200).send({
    //   status: "Success",
    //   message: "Successfully got all payment",
    //   clientSecret: paymentIntent.client_secret,
    // });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.getPayment = async (req, res) => {
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
