import httpStatus from "http-status";
import Customer from "../models/Customer.js";
import catchAsync from "../shared/catchAsync.js";
import { responseObj } from "../shared/response.js";

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
