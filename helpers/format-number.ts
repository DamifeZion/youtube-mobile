import millify from "millify";

export const formatNumber = (number: number) =>
	millify(number, {
		precision: 1,
	});
