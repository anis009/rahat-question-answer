import mongoose from "mongoose";
import orderSchema from "./Order";
const customerSchema = new mongoose.Schema(
	{
		customerName: {
			type: String,
			required: true,
		},
		customerPhone: {
			type: String,
			required: true,
			unique: true,
		},
		customerLocation: {
			type: String,
			required: true,
		},
		orders: [orderSchema],
	},
	{
		timestamps: true,
	}
);

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
