const router = require("express").Router();
const productDetails1 = require("../../controllers//productDetails1/productDetails1.controller");

router.put("/:id", productDetails1.updateProductDetails);
router.get("/:id", productDetails1.getSingleProductDetails);

module.exports = router;
