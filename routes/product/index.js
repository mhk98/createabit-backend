const router = require("express").Router();
const product = require("../../controllers/product/product.controller");
const { upload } = require("../../middlewares/upload");

router.post("/create-product", upload, product.createProduct);
router.get("/", product.getAllProduct);

module.exports = router;
