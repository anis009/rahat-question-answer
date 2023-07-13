import express from "express";
import { createCustomer,
	deleteCustomer,
	getAllCustomers,
	getSingleCustomer,
	updateCustomer, } from "../controllers/Customer.js";

const customerRoute = express.Router();

customerRoute.route("/").post(createCustomer).get(getAllCustomers);
customerRoute
	.route("/:id")
	.patch(updateCustomer)
	.delete(deleteCustomer)
	.get(getSingleCustomer);

export { customerRoute };
  
