import express from "express";
import mongoose from "mongoose";
import bluebird from "bluebird";
import bodyParser from "body-parser";
import config from "./config/index.js";
import authRouter from "./routes/auth.js";
import globalErrorHandler from "./middleware/globalErrorHandler.js";
import httpStatus from "http-status";
import { ApiError } from "./errors/ApiError.js";
import colors from "colors";
import morgan from "morgan";
import { customerRoute } from "./routes/customer.js";
import { orderRoute } from "./routes/order.js";
import cors from "cors";
import Order from "./models/Order.js";
const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
if (config.NODE_ENV === "DEV") {
	app.use(morgan("dev"));
}

// Connect to MongoDB

app.use("/api/auth", authRouter);
app.use("/api/customers", customerRoute);
app.use("/api/orders", orderRoute);

app.get("/", async (req, res, next) => {
	// 	res.send(id);
	// };

	// getLastOrderId();

	res.send("HELLO SERVER");
});

app.use("/api/auth", authRouter);

app.get("/", async (req, res) => {
	res.send("Hello, world!");
});

app.post("/test", async (req, res) => {
	console.log("req.body: ", req.body);
	res.json({
		success: true,
	});
});

app.use(globalErrorHandler);

app.use((req, res, next) => {
	res.status(httpStatus.NOT_FOUND).json({
		success: false,
		message: "Not Found",
		errorMessages: [
			{
				path: req.originalUrl,
				message: "Api Not Found",
			},
		],
	});
	//next();
});

export default app;
