const express = require("express");
const productController = require("./ProductController");
const productRouter = express.Router();
productRouter.post("/product", productController.AddProduct);
productRouter.get("/product", productController.fetchProduct);
productRouter.put("/product", productController.updateProduct);
productRouter.delete("/product/:id", productController.deleteProduct);
module.exports = productRouter;
