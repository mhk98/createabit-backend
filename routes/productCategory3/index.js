const router = require("express").Router();
const productCategory3 = require("../../controllers/productCategory3/productCategory3.controller");
const { upload } = require("../../middlewares/upload");

router.post("/", upload, productCategory3.insertProductCategory);
router.get("/", productCategory3.getAllProductCategory);
// router.get("/:id", productCategory.getSingleProductCategory);

module.exports = router;
