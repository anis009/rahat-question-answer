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
		orders: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Order",
				required: false,
			},
		],
	},
	{
		timestamps: true,
	}
);

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
