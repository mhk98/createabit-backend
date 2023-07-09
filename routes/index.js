const router = require("express").Router();
const user = require("./user");
const service = require("./service");
const serviceDetails = require("./serviceDetails");
const product = require("./product");
const productDetails = require("./productDetails");

router.use("/user", user);
router.use("/service", service);
router.use("/service-details", serviceDetails);
router.use("/product", product);
router.use("/productDetails", productDetails);

module.exports = router;
