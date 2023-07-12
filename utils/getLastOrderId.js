import Order from "../models/Order.js";

export const getLastOrderId = async () => {
	const order = await Order.find()
		.sort({
			createdAt: -1,
		})
		.limit(1);
	let id;
	if (order.length > 0 && order[0]?.orderId) {
		const orderId = order[0]?.orderId;
		id = orderId.slice(4);
		id = Number(id) + 1;
		id = "ORD-" + id;
	} else {
		id = "ORD-2000";
	}

	return id;
};
