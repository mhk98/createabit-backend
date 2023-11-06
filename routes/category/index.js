const router = require("express").Router();
const category = require("../../controllers/category/category.controller");

router.post("/create-category", category.createCategory);
router.get("/", category.getAllCategory);
router.get("/:id", category.getSingleCategory);
router.delete("/", category.deleteCategory);
router.put("/", category.updateCategory);

module.exports = router;
