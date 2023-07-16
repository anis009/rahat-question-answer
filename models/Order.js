import mongoose, { Schema } from "mongoose";
import { ClothSchema } from "./Cloth.js";

const orderSchema = new Schema(
	{
		orderId: {
			type: String,
			required: true,
			unique: true,
		},
		orderNote: {
			type: String,
			required: true,
		},
		customerId: {
			type: Schema.Types.ObjectId,
			ref: "Customer",
			required: true,
		},
		clothList: [ClothSchema],
		paidAmount: {
			type: Number,
			required: true,
		},
		estimatedDeliveryTime: {
			type: Date,
			required: true,
		},
		deliveredOn: {
			type: Date,
			default: null,
		},
		orderStatus: {
			type: String,
			enum: ["pending", "delivered", "done"],
			default: "pending",
		},
	},
	{
		timestamps: true,
	}
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
