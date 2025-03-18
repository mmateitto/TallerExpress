import { Router } from "express";
import routerShops from "./shops.js";
import routerProducts from "./products.js";
import routerEmployees from "./employees.js";

let routerIndex = Router();

routerIndex.use("/shops", routerShops);
routerIndex.use("/products", routerProducts);
routerIndex.use("/employees", routerEmployees);

export default routerIndex; 