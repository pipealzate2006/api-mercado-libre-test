import { Router } from "express";
import {
  getProducts,
  getProduct,
} from "./../controllers/products.controllers.js";

export const productsRouter = Router();

productsRouter.get("/items", getProducts);

productsRouter.get("/", getProduct);
