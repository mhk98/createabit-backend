const router = require("express").Router();
const productDetails2 = require("../../controllers//productDetails1/productDetails1.controller");

router.put("/:id", productDetails2.updateProductDetails);
router.get("/:id", productDetails2.getSingleProductDetails);

module.exports = router;
