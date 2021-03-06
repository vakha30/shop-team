const Product = require("../models/Product.model");

module.exports.productsController = {
  addProduct: async (req, res) => {
    try {
      const { name, brand, category } = req.body;
      await Product.create({
        name: name,
        brand: brand,
        category: category,
      });

      res.json("Продукт добавлен");
    } catch (e) {
      res.json(`Добавление продукта не удалось из-за ошибки ${e}`);
    }
  },
  getAllProduct: async (req, res) => {
    try {
      const products = await Product.find();

      res.json(products);
    } catch (e) {
      res.json(`Вывести все продукты не удалось из-за ошибки ${e}`);
    }
  },
  getProductsByCategory: async (req, res) => {
    try {
      const products = await Product.find({ category: req.params.id });

      res.json(products);
    } catch (e) {
      res.json(e);
    }
  },
  getProductsByBrand: async (req, res) => {
    try {
      const products = await Product.find({ brand: req.params.id });

      res.json(products);
    } catch (e) {
      res.json(e);
    }
  },
  getProductByID: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);

      res.json(product);
    } catch (e) {
      res.json(`Вывести продукт не удалось из-за ошибки ${e}`);
    }
  },
  patchProduct: async (req, res) => {
    try {
      const { name, brand, category } = req.body;
      await Product.findByIdAndUpdate(req.params.id, {
        name: name,
        brand: brand,
        category: category,
      });

      res.json(`Продукт с ID ${req.params.id} изменен`);
    } catch (e) {
      res.json(`Изменить продукт не удалось из-за ошибки ${e}`);
    }
  },
  deleteProduct: async (req, res) => {
    try {
      await Product.findByIdAndRemove(req.params.id);

      res.json(`Продукт с ID ${req.params.id} удален`);
    } catch (e) {
      res.json(`Удаление продукта не удалось из-за ошибки ${e}`);
    }
  },
};
