import mongoose from "mongoose";
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
	},
	{
		timestamps: true,
	}
);

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
