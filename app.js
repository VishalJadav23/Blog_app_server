const express = require("express");
const ConnectionDB = require("./Common/Connection");
const categoryRouter = require("./Category/CategoryRouter");
require("dotenv").config();
const cors = require("cors");
const productRouter = require("./Product/ProductRouter");
const app = express();
app.use(cors());
app.use(express.json());
ConnectionDB();

app.get("/", (req, res) => {
  return res.status(200).send({ message: "Success" });
});

app.use("/category", categoryRouter);

app.use("/product", productRouter);

app.listen(process.env.PORT, () => {
  console.log(`server Started `);
  console.log(`http://localhost:${process.env.PORT}`);
});
