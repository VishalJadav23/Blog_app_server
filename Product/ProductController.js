const productModel = require("./ProductModel");

class ProductController {
  async fetchProduct(req, res) {
    try {
      const result = await productModel.read();
      if (!result)
        return res.status(500).send({ message: "something went wrong" });
      return res.status(200).send({ message: "Success" });
    } catch (error) {
      return res.status(500).send({ message: "Internal server error" });
    }
  }
  async AddProduct(req, res) {
    try {
        const {name,alias,category}=req.body
        if(!name||!alias||!category){
            return res.status(400).send({message:"Missing Dependancy"})
        }
      const result = await productModel.create({...req.body});
      if (!result)
        return res.status(500).send({ message: "something went wrong" });
      return res.status(200).send({ message: "Success" });
    } catch (error) {
      return res.status(500).send({ message: "Internal server error" });
    }
  }
  async updateProduct(req, res) {
    try {
        const {name,alias,category,_id}=req.body
        if(!name||!alias||!category||!_id){
            return res.status(400).send({message:"Missing Dependancy"})
        }
      const result = await productModel.update(_id,{...req.body});
      if (!result)
        return res.status(500).send({ message: "something went wrong" });
      return res.status(200).send({ message: "Success" });
    } catch (error) {
      return res.status(500).send({ message: "Internal server error" });
    }
  }
  async deleteProduct(req, res) {
    try {
        const {_id}=req.params
        if(!_id){
            return res.status(400).send({message:"Bad Request"})
        }
      const result = await productModel.delete(_id);
      if (!result)
        return res.status(500).send({ message: "something went wrong" });
      return res.status(200).send({ message: "Success" });
    } catch (error) {
      return res.status(500).send({ message: "Internal server error" });
    }
  }
}

const productController = new ProductController();
module.exports = productController;
