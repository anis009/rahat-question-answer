const handleCastError = (error) => {
	const errors = [
		{
			path: error.path,
			message: "Invalid id",
		},
	];

	const statusCode = 400;

	return {
		statusCode: statusCode,
		message: "Cast Error",
		errorMessages: errors,
	};
};

export default handleCastError;
