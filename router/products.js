import { Router } from "express";
import {allProducts, productsByName, productsByModel, productsByType, productsByPrice, productsByInStock} from '../controllers/products/read.js';
import { create, createMany } from "../controllers/products/create.js";

let routerProducts = Router();

routerProducts.get("/allProducts", allProducts);
routerProducts.get("/name/:name", productsByName);
routerProducts.get("/model/:model", productsByModel);
routerProducts.get("/type/:type", productsByType);
routerProducts.get("/price/:price", productsByPrice);
routerProducts.get("/inStock/:inStock", productsByInStock);
routerProducts.post("/createProduct", create);
routerProducts.post("/createProducts", createMany);

export default routerProducts;