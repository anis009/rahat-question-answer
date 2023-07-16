export const formatUpdateData = (data) => {
	const updateData = {};
	Object.keys(data).forEach((key) => {
		updateData[`clothList.$.${key}`] = data[key];
	});
	return updateData;
};
