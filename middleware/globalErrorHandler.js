import config from "../config/index.js";
import { ApiError } from "../errors/ApiError.js";
import handleCastError from "../errors/handlerCastError.js";
import handleValidationError from "../errors/validationError.js";

const globalErrorHandler = (error, req, res, next) => {
	if (config.NODE_ENV === "DEV") {
		console.log("global-error-handler🚀~", error);
	}
	let statusCode = 500;
	let message = "Something went wrong";
	let errorMessages = [];

	if (error.name === "ValidationError") {
		const simplifiedError = handleValidationError(error);
		statusCode = simplifiedError.statusCode;
		message = simplifiedError.message;
		errorMessages = simplifiedError.errorMessages;
	} else if (error instanceof ApiError) {
		console.log(error);
		statusCode = error?.statusCode;
		message = error?.message;
		errorMessages = error?.message
			? [
					{
						path: "",
						message: error?.message,
					},
			  ]
			: [];
	} else if (error?.name === "CastError") {
		const simplifiedError = handleCastError(error);
		statusCode = simplifiedError.statusCode;
		message = simplifiedError.message;
		errorMessages = simplifiedError.errorMessages;
	} else if (error instanceof Error) {
		message = error?.message;
		errorMessages = error?.message
			? [
					{
						path: "",
						message: error?.message,
					},
			  ]
			: [];
	}

	res.status(statusCode).json({
		success: false,
		message,
		errorMessages: errorMessages,
		stack: config.NODE_ENV === "DEV" ? error.stack : "",
	});
};

export default globalErrorHandler;
