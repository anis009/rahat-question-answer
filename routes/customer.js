import express from "express";
import { createCustomer } from "../controllers/Customer.js";

const customerRoute = express.Router();

customerRoute.route("/").post(createCustomer);

export { customerRoute };
