const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  brand: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Brand",
  },
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
