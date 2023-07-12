const handleValidationError = (error) => {
	const errors = Object.values(error.errors).map((element) => {
		return {
			path: element?.path,
			message: element?.message,
		};
	});
	const statusCode = 400;
	return {
		statusCode,
		message: "Validation Error",
		errorMessages: errors,
	};
};
export default handleValidationError;
