const router = require("express").Router();
const productCategory1 = require("../../controllers/productCategory1/productCategory1.controller");
const { upload } = require("../../middlewares/upload");

router.post("/", upload, productCategory1.insertProductCategory);
router.get("/", productCategory1.getAllProductCategory);
// router.get("/:id", productCategory.getSingleProductCategory);

module.exports = router;
