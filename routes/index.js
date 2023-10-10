const router = require("express").Router();
const user = require("./user");
const service = require("./service");
const serviceDetails = require("./serviceDetails");
const product = require("./product");
const productCategory1 = require("./productCategory1");
const productCategory2 = require("./productCategory2");
const productCategory3 = require("./productCategory3");
const productDetails1 = require("./productDetails1");
const productDetails2 = require("./productDetails2");
const productDetails3 = require("./productDetails3");
const cart = require("./cart");

router.use("/user", user);
router.use("/service", service);
router.use("/service-details", serviceDetails);
router.use("/product", product);
router.use("/cart", cart);
router.use("/productCategory1", productCategory1);
router.use("/productCategory2", productCategory2);
router.use("/productCategory3", productCategory3);
router.use("/productDetails1", productDetails1);
router.use("/productDetails2", productDetails2);
router.use("/productDetails3", productDetails3);

module.exports = router;
