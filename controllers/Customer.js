import httpStatus from "http-status";
import Customer from "../models/Customer.js";
import catchAsync from "../shared/catchAsync.js";
import { responseObj } from "../shared/response.js";
import { ApiError } from "../errors/ApiError.js";
import mongoose from "mongoose";
import Order from "../models/Order.js";

export const createCustomer = catchAsync(async (req, res) => {
	const customer = req.body;
	const savedCustomer = await Customer.create(customer);

	const result = responseObj(
		httpStatus.CREATED,
		"Customer is created successfully",
		savedCustomer
	);
	res.json(result);
});

export const updateCustomer = catchAsync(async (req, res) => {
	const data = req.body;
	const id = req.params.id;
	const updateData = await Customer.findOneAndUpdate({ _id: id }, data, {
		new: true,
	});
	const result = responseObj(
		httpStatus.CREATED,
		"Customer updated successfully",
		updateData
	);
	res.json(result);
});

export const getSingleCustomer = catchAsync(async (req, res) => {
	const customerId = req.params.id;
	const customer = await Customer.findById(customerId);

	if (!customer) {
		throw new ApiError(httpStatus.NOT_FOUND, "Customer not found");
	}

	const result = responseObj(
		httpStatus.OK,
		"Customer retrieved successfully",
		customer
	);
	res.json(result);
});

export const deleteCustomer = catchAsync(async (req, res) => {
	const customerId = req.params.id;
	console.log('customerId: ', customerId)

	const _pipeline = [
		{
			$match: {
				_id: new mongoose.Types.ObjectId(customerId)
			}
		},
		{
			$lookup: {
				from: 'orders', // actual name of the related collection
				localField: '_id', // customer _id of this collection
				foreignField: 'customerId', // customer _id of orders collection
				as: 'orders' // key of where the response will come
			}
		}
	]
	const _deleteCustomerList = await Customer.aggregate(_pipeline)

	if (!_deleteCustomerList.length) {
		throw new ApiError(httpStatus.NOT_FOUND, "Customer not found")
	} else {
		const _orderIds = _deleteCustomerList[0].orders.map((_order) => _order._id)
		const _deletedCustomer = await Customer.findByIdAndDelete(customerId)
		
		console.log('will delete orders length: ', _orderIds.length)

		for (const _orderId of _orderIds) {
			await Order.findByIdAndDelete(_orderId)
		}

		const result = responseObj(
			httpStatus.OK,
			"Customer and related Orders deleted successfully",
			"deletedCustomer"
		);
		res.json(result);
	}
});

export const getAllCustomers = catchAsync(async (req, res) => {
	const customers = await Customer.find().sort({ createdAt: -1 });
	console.log(customers);
	const result = responseObj(
		httpStatus.OK,
		"Customers retrieved successfully",
		customers
	);
	res.json(result);
});
