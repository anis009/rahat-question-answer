export const responseObj = (statusCode, message, data = null) => {
	return {
		statusCode: statusCode,
		message: message,
		data: data,
	};
};
