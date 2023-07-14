const router = require("express").Router();
const productDetails3 = require("../../controllers//productDetails1/productDetails1.controller");

router.put("/:id", productDetails3.updateProductDetails);
router.get("/:id", productDetails3.getSingleProductDetails);

module.exports = router;
