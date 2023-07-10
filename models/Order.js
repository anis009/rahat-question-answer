import mongoose from "mongoose";
import { clothSchema } from "./Cloth";

const { Schema, model } = mongoose;

const orderSchema = new Schema(
	{
		orderNote: {
			type: String,
			required: true,
		},
		totalPrice: {
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
			enum: ["pending", "delivered", "received", "done"],
			required: true,
		},
		clothList: [clothSchema],
	},
	{
		timestamps: true,
	}
);

export default orderSchema;
