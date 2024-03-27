const router = require("express").Router();
const checkout = require("../../controllers/checkout/checkout.controller");

router.post("/create-checkout", checkout.createCheckout);
router.get("/", checkout.getCheckProduct);

module.exports = router;
