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

	// Create a new session using `startSession`
	const session = await mongoose.startSession();

	try {
		// Start a transaction for the session
		session.startTransaction();

		// Retrieve the order from the database within the transaction
		const order = await Order.findById(orderId).session(session);

		// If the order is not found, throw an error to be caught by the catch block
		if (!order) {
			throw new ApiError(httpStatus.NOT_FOUND, "Order not found");
		}

		// Retrieve the customer information for the order from the database within the transaction
		const customer = await Customer.findById(order.customerId)
			.select({
				customerName: 1,
				customerPhone: 1,
				customerLocation: 1,
			})
			.session(session);

		// Commit the transaction after all operations have completed successfully
		await session.commitTransaction();

		// Combine the order and customer data if needed
		const combinedData = { ...customer.toObject(), ...order.toObject() };

		// Prepare the response object
		const result = responseObj(
			httpStatus.OK,
			"Order retrieved successfully",
			combinedData
		);

		// Send the response to the client
		res.json(result);
	} catch (error) {
		// If an error occurs during the transaction, catch it and handle appropriately
		await session.abortTransaction();
		throw error;
	} finally {
		// Finally, end the session
		session.endSession();
	}
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
	const orders = await Order.find()
		.populate({
			path: "customerId",
			model: "Customer",
			select: "-_id",
		})
		.sort({ createdAt: -1 })
		.lean();
	const temp = [];

	orders.forEach((order) => {
		const { customerId, ...others } = order;
		temp.push({
			...customerId,
			...others,
		});
	});

	// console.log(orders);
	const result = responseObj(
		httpStatus.OK,
		"Orders retrieved successfully",
		temp
	);
	res.json(result);
});
