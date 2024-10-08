import { readJSON } from "./../utils.js";

const products = readJSON("./products.json");

export const getProducts = (req, res) => {
  const { q } = req.query;
  try {
    if (q) {
      const query = q.toLowerCase();
      const filteredProducts = products.filter((product) => {
        return (
          product.title.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.brand.toLowerCase().includes(query) ||
          product.price.toString().includes(query) ||
          product.stock.toString().includes(query)
        );
      });
      return res.json(filteredProducts);
    }
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getProduct = (req, res) => {
  try {
    const { id } = req.params;
    const productID = parseInt(id);
    const product = products.find((product) => product.id === productID);
    if (product) return res.json(product);
    res.status(404).json({ error: "Product not found" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
