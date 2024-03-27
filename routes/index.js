const router = require("express").Router();
const user = require("./user");

const product = require("./product");

const cart = require("./cart");
const checkout = require("./checkout");
const order = require("./order");
const payment = require("./payment");
const category = require("./category");

router.use("/user", user);
router.use("/product", product);
router.use("/cart", cart);
router.use("/cart", cart);
router.use("/checkout", checkout);
router.use("/order", order);
router.use("/payment", payment);
router.use("/category", category);

module.exports = router;
