const router = require("express").Router();
const subcategory = require("../../controllers/subcategory/subcategory.controller");

router.post("/create-subcategory", subcategory.createSubCategory);
router.get("/", subcategory.getAllSubCategory);
router.get("/:id", subcategory.getSingleSubCategory);
router.delete("/", subcategory.deleteSubCategory);
router.put("/", subcategory.updateSubCategory);

module.exports = router;
