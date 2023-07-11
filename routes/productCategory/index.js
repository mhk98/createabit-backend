const router = require("express").Router();
const productCategory = require("../../controllers/productCategory/productCategory.controller");
const { upload } = require("../../middlewares/upload");

router.put(
  "/update-productCategory/:id",
  upload,
  productCategory.updateProductCategory
);
router.post("/:id", upload, productCategory.insertProductCategory);
router.get("/allproduct/:id", upload, productCategory.getAllProductCategory);
router.get("/:id", productCategory.getSingleProductCategory);

module.exports = router;
