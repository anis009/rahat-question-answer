import dotenv from "dotenv";
import path from "path";
dotenv.config({
	path: path.join(process.cwd(), ".env"),
});

export default {
	port: process.env.PORT,
	NODE_ENV: process.env.NODE_ENV,
	JWT_SECRET: process.env.JWT_SECRET,
	MONGODB_URI: process.env.NODE_ENV === 'PROD' ? process.env["MONGODB_URI_PROD"] : process.env["MONGODB_URI_LOCAL"]
};
