const router = require("express").Router();
const payment = require("../../controllers/payment/payment.controller");

router.post("/create-payment-intent", payment.createPayment);

module.exports = router;
