const router = require("express").Router();
const productCategory = require("../../controllers/productCategory/productCategory.controller");

router.put("/update-productCategory", productCategory.updateProductCategory);
router.get("/", productCategory.getSingleProductCategory);

module.exports = router;
