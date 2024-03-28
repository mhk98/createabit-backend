const router = require("express").Router();
const product = require("../../controllers/product/product.controller");
const { upload } = require("../../middlewares/upload");

router.post("/create-product", upload, product.createProduct);
router.get("/", product.getAllProduct);
router.get("/:id", product.singleProduct);
router.delete("/:id", product.deleteProduct);
router.patch("/:id", upload, product.updateProduct);

module.exports = router;
