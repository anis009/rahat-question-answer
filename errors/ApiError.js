class ApiError extends Error {
	constructor(statusCode, message, stack = "") {
		super(message);
		console.log(statusCode);
		this.statusCode = statusCode;
		if (stack) {
			this.stack = stack;
		} else {
			Error.captureStackTrace(this, this.constructor);
		}
	}
}

export { ApiError };
