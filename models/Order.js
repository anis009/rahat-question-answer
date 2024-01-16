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
			default: "", // Added default value as an empty string
		},
		customerName: {
			type: String,
			required: false,
			default: "", // Added default value as an empty string
		},
		customerPhone: {
			type: String,
			required: false,
			unique: false,
			default: "", // Added default value as an empty string
		},
		customerLocation: {
			type: String,
			required: false,
			default: "", // Added default value as an empty string
		},
		clothList: [ClothSchema],
		paidAmount: {
			type: Number,
			default: 0,
		},
		estimatedDeliveryTime: {
			type: Date,
			default: null,
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
