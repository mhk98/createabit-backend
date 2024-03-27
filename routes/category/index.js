const router = require("express").Router();
const category = require("../../controllers/category/category.controller");
const { upload } = require("../../middlewares/upload");

router.post("/create-category", upload, category.createCategory);
router.get("/", category.getAllCategory);
router.delete("/:id", category.deleteCategory);
router.put("/:id", upload, category.updateCategory);

module.exports = router;
