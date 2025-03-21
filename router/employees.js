import { Router } from "express";
import {allEmployees, employeesByName, employeesByPost, employeesBySalary} from "../controllers/employees/read.js";
import { create, createMany } from "../controllers/employees/create.js";

let routerEmployees = Router();

routerEmployees.get("/allEmployees", allEmployees);
routerEmployees.get("/name/:name", employeesByName);
routerEmployees.get("/post/:post", employeesByPost);
routerEmployees.get("/salary/:salary", employeesBySalary);
routerEmployees.post("/createEmployee", create);
routerEmployees.post("/createEmployees", createMany);

export default routerEmployees;