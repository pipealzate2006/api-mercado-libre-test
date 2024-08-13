import express from "express";
import { productsRouter } from "./routes/products.routes.js";
import { corsMiddleWares } from "./middlewares/cors.js";

const app = express();

app.use(express.json());
app.use(corsMiddleWares());
app.use(productsRouter);

export default app;
