const { default: mongoose } = require("mongoose");

class ProductModel {
  constructor() {
    this.schema = mongoose.Schema(
      {
        name: { type: String, required: true },
        alias: { type: String, required: true, unique: true },
        category: {
          type: mongoose.Types.ObjectId,
          required: true,
          ref: "tbl_category",
        },
      },
      {
        timeStamp: true,
      }
    );

    this.model = mongoose.model("tbl_product", this.schema);
  }
  create(data) {
    return this.model.create(data);
  }
  read() {
    return this.model.find();
  }
  update(id, data) {
    return this.model.findOneUpdateOne({_id:id} ,data);
  }
  delete(id) {
    return this.model.delete({_id:id});
  }
}

const productModel = new ProductModel();
module.exports = productModel;
