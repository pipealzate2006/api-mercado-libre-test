import { Router } from "express";
import {
  getProducts,
  getProduct,
} from "./../controllers/products.controllers.js";

export const productsRouter = Router();

productsRouter.get("/api/items", getProducts);

productsRouter.get("/api/items/:id", getProduct);
