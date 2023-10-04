const category_model = require("./CategoryModel");

class CateGoryController {
  async createCategory(req, res) {
    try {
      const { name, alias } = req.body;
      if (!name) {
        return res
          .status(400)
          .send({ message: "Required Field name is Missing" });
      }
      if (!alias) {
        return res
          .status(400)
          .send({ message: "Required Field alias is Missing" });
      }
      const result = await category_model.creat(req.body);
      if (!result)
        return res.status(500).send({ message: "Something went wrong" });

      return res.status(200).send({ message: "Success" });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: "Internal Server Error" });
    }
  }

  async readCategory(req, res) {
    try {
      const data = await category_model.read();
      if (!data) {
        return res.status(400).send({ message: "Something went wrong" });
      }
      return res.status(200).send({ message: "success", data: data });
    } catch (error) {
      return res.status(500).send({ message: "Internal server error" });
    }
  }
  async updateCategory(req, res) {
    try {
      const { _id, name, alias } = req.body.data;
      console.log(req.body.data)
      if (!_id || !name || !alias)
        return res.status(400).send({ message: "Missing Dependency" });
      const data = await category_model.update(_id, { ...req.body.data });
      if (!data && data.modifiedCount <= 0) {
        return res.status(400).send({ message: "Something went wrong" });
      }
      return res.status(200).send({ message: "success" });
    } catch (error) {
      return res.status(500).send({ message: "Internal server error" });
    }
  }
  async deleteCategory(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).send({ message: "Bad request" });
      const data = await category_model.delete(id);
      if (!data && data.deletedCount <= 0) {
        return res.status(400).send({ message: "Something went wrong" });
      }
      return res.status(200).send({ message: "success" });
    } catch (error) {
      return res.status(500).send({ message: "Internal server error" });
    }
  }
}

const category_Controller = new CateGoryController();
module.exports = category_Controller;
