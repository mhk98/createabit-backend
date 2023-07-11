const router = require("express").Router();
const product = require("../../controllers/product/product.controller");

router.post("/create-product", product.createProduct);
router.get("/", product.getAllProduct);

module.exports = router;
