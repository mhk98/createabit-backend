const router = require("express").Router();
const user = require("./user");
const service = require("./service");
const serviceDetails = require("./serviceDetails");
const product = require("./product");
const productCategory = require("./productCategory");

router.use("/user", user);
router.use("/service", service);
router.use("/service-details", serviceDetails);
router.use("/product", product);
router.use("/productCategory", productCategory);

module.exports = router;
