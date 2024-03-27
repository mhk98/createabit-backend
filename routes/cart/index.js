const router = require("express").Router();
const cart = require("../../controllers/cart/cart.controller");
const { upload } = require("../../middlewares/upload");

router.post("/create-cart", upload, cart.createCart);
router.get("/:id", cart.getCartProduct);
router.delete("/:id", cart.deleteCartProduct);

module.exports = router;
