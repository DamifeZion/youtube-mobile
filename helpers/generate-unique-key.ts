export const generateUniqueKey = (key: string | number) => {
	return `key-${Date.now()}-${key}`;
};
