import express from "express";
import {
	createOrder,
	deleteOrderCloth,
	deleteOrder,
	getAllOrders,
	getSingleOrder,
	updateOrderCloth,
	updateOrder,
} from "../controllers/Order.js";
const orderRoute = express.Router();

orderRoute.route("/").post(createOrder).get(getAllOrders);
orderRoute
	.route("/cloths/:orderId/:clothId")
	.patch(updateOrderCloth)
	.delete(deleteOrderCloth);
orderRoute
	.route("/:id")
	.delete(deleteOrder)
	.get(getSingleOrder)
	.patch(updateOrder);

export { orderRoute };
