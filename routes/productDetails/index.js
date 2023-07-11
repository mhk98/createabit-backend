const router = require("express").Router();
const productDetails = require("../../controllers/productDetails/productDetails.controller");

router.put("/update-productDetails", productDetails.updateProductDetails);
router.get("/", productDetails.getSingleProductDetails);

module.exports = router;
