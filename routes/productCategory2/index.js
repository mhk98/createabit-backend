const router = require("express").Router();
const productCategory2 = require("../../controllers/productCategory2/productCategory2.controller");
const { upload } = require("../../middlewares/upload");

router.post("/", upload, productCategory2.insertProductCategory);
router.get("/", productCategory2.getAllProductCategory);
// router.get("/:id", productCategory.getSingleProductCategory);

module.exports = router;
