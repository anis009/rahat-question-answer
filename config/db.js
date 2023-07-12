import mongoose from "mongoose";
import config from "./index.js";

const connectDB = async () => {
	try {
		console.log(config.MONGODB_URI);
		const conn = await mongoose.connect(config.MONGODB_URI);
		console.log(
			`MongoDB Connected: ${conn.connection.host}🔥🔥🔥🚀🚀`.green.underline
		);
	} catch (err) {
		console.error(`Error:${err.message}`.red.underline.bold);
		process.exit(1);
	}
};

export default connectDB;
