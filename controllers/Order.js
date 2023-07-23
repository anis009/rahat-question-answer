import httpStatus from "http-status";
import Order from "../models/Order.js";
import catchAsync from "../shared/catchAsync.js";
import { responseObj } from "../shared/response.js";
import { ApiError } from "../errors/ApiError.js";
import { getLastOrderId } from "../utils/getLastOrderId.js";
import { formatUpdateData } from "../shared/formatUpdateData.js";
import Customer from "../models/Customer.js";
import mongoose from "mongoose";

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

export const updateOrderCloth = catchAsync(async (req, res) => {
	const data = req.body;
	const updateData = formatUpdateData(data);
	// console.log(updateData);
	const orderId = req.params.orderId;
	const clothId = req.params.clothId;

	const updatedData = await Order.findOneAndUpdate(
		{
			_id: orderId,
			"clothList._id": clothId,
		},
		{
			$set: updateData,
		},
		{ new: true }
	);

	const result = responseObj(
		httpStatus.CREATED,
		"Order updated successfully",
		updatedData
	);
	res.json(result);
});

export const getSingleOrder = catchAsync(async (req, res) => {
	const orderId = req.params.id;
	const order = await Order.findById(orderId);
	// console.log(orders);
	const result = responseObj(
		httpStatus.OK,
		"Order retrieved successfully",
		order
	);
	res.json(result);
});

export const deleteOrderCloth = catchAsync(async (req, res) => {
	const orderId = req.params.orderId;
	const clothId = req.params.clothId;
	const updatedData = await Order.findOneAndUpdate(
		{
			_id: orderId,
		},
		{
			$pull: {
				clothList: { _id: clothId },
			},
		},
		{ new: true }
	);

	const result = responseObj(
		httpStatus.OK,
		"Cloth deleted successfully",
		updatedData
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
	const orders = await Order.find().sort({ createdAt: -1 });
	// console.log(orders);
	const result = responseObj(
		httpStatus.OK,
		"Orders retrieved successfully",
		orders
	);
	res.json(result);
});
