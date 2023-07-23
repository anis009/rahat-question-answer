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
			required: false,
		},
		customerName: {
			type: String,
			required: false,
		},
		customerPhone: {
			type: String,
			required: false,
		},
		customerLocation: {
			type: String,
			required: false,
		},
		clothList: [ClothSchema],
		paidAmount: {
			type: Number,
			default: 0,
		},
		estimatedDeliveryTime: {
			type: Date,
			required: null,
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
