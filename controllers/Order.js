import httpStatus from "http-status";
import Order from "../models/Order.js";
import catchAsync from "../shared/catchAsync.js";
import { responseObj } from "../shared/response.js";
import { ApiError } from "../errors/ApiError.js";
import { getLastOrderId } from "../utils/getLastOrderId.js";

export const createOrder = catchAsync(async (req, res) => {
	const order = req.body;
	const orderId = await getLastOrderId();
	const createdData = { orderId, ...order };
	const orderSaved = await Order.create(createdData);
	const result = responseObj(
		httpStatus.CREATED,
		"order created successfully",
		orderSaved
	);
	res.json(result);
});

export const updateOrder = catchAsync(async (req, res) => {
	const data = req.body;
	const id = req.params.id;
	const updateData = await Order.findOneAndUpdate({ _id: id }, data, {
		new: true,
	});
	const result = responseObj(
		httpStatus.CREATED,
		"Order updated successfully",
		updateData
	);
	res.json(result);
});

export const getSingleOrder = catchAsync(async (req, res) => {
	const orderId = req.params.id;
	const order = await Order.findById(orderId).populate({
		path: "customerId",
		model: "Customer",
	});

	if (!order) {
		throw new ApiError(httpStatus.NOT_FOUND, "Order not found");
	}

	const result = responseObj(
		httpStatus.OK,
		"Order retrieved successfully",
		order
	);
	res.json(result);
});

export const deleteOrder = catchAsync(async (req, res) => {
	const orderId = req.params.id;
	const deletedOrder = await Order.findByIdAndDelete(orderId);

	if (!deletedOrder) {
		throw new ApiError(httpStatus.NOT_FOUND, "Order not found");
	}

	const result = responseObj(
		httpStatus.OK,
		"Order deleted successfully",
		deletedOrder
	);
	res.json(result);
});

export const getAllOrders = catchAsync(async (req, res) => {
	const orders = await Order.find().populate({
		path: "customerId",
		model: "Customer",
	});
	// console.log(orders);
	const result = responseObj(
		httpStatus.OK,
		"Orders retrieved successfully",
		orders
	);
	res.json(result);
});
