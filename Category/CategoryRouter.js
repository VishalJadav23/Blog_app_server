const express = require("express");
const category_Controller = require("./CategoryController");
const categoryRouter = express.Router();

categoryRouter.post("/", category_Controller.createCategory);
categoryRouter.get("/", category_Controller.readCategory);
categoryRouter.put("/", category_Controller.updateCategory);
categoryRouter.delete("/:id", category_Controller.deleteCategory);

module.exports = categoryRouter;
