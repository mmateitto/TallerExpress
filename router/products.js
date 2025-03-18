import { Router } from "express";
import {allProducts, productsByName, productsByModel, productsByType, productsByPrice, productsByInStock} from '../controllers/products/read.js';
import create from "../controllers/products/create.js";

let routerProducts = Router();

routerProducts.get("/allProducts", allProducts);
routerProducts.get("/name/:name", productsByName);
routerProducts.get("/model/:model", productsByModel);
routerProducts.get("/type/:type", productsByType);
routerProducts.get("/price/:price", productsByPrice);
routerProducts.get("/inStock/:inStock", productsByInStock);
routerProducts.post("/createProduct", create);

export default routerProducts;