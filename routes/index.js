const router = require("express").Router();
const user = require("./user");
const service = require("./service");
const serviceDetails = require("./serviceDetails");
const product = require("./product");
<<<<<<< HEAD
const productCategory = require("./productCategory");
=======
const productDetails = require("./productDetails");
>>>>>>> 4025c9d4d347193955be4ec9b7f1a3d0de7ef82a

router.use("/user", user);
router.use("/service", service);
router.use("/service-details", serviceDetails);
router.use("/product", product);
<<<<<<< HEAD
router.use("/productCategory", productCategory);
=======
router.use("/productDetails", productDetails);
>>>>>>> 4025c9d4d347193955be4ec9b7f1a3d0de7ef82a

module.exports = router;
