const { default: mongoose } = require("mongoose");

class CategoryModel {
  constructor() {
    this.schema = mongoose.Schema(
      {
        name: { type: String, require: true },
        alias: { type: String, require: true, unique: true },
      },
      { timeStamp: true }
    );

    this.model = mongoose.model("tbl_category", this.schema);
  }

  async creat(data) {
    return await this.model.create(data);
  }
  async read() {
    return await this.model.find();
  }
  async update(id, data) {
    return await this.model.updateOne({ _id: id }, { ...data });
  }
  async delete(id) {
    return await this.model.deleteOne({ _id: id });
  }
}

const category_model = new CategoryModel();
module.exports = category_model;
