import express from "express";
import {
	createOrder,
	deleteOrder,
	getAllOrders,
	getSingleOrder,
	updateOrder,
} from "../controllers/Order.js";
const orderRoute = express.Router();

orderRoute.route("/").post(createOrder).get(getAllOrders);
orderRoute
	.route("/:id")
	.patch(updateOrder)
	.delete(deleteOrder)
	.get(getSingleOrder);

export { orderRoute };
