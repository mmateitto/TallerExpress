import { Router } from "express";
import {allShops, shopsByName, shopsByAddress} from "../controllers/shops/read.js";
import create from "../controllers/shops/create.js";

const routerShops = Router();

routerShops.get("/allShops", allShops);
routerShops.get("/name/:name", shopsByName);
routerShops.get("/address/:address", shopsByAddress);
routerShops.post("/createShop", create);

export default routerShops;