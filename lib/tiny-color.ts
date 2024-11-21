import { ColorValue } from "react-native";
import tinycolour from "tinycolor2";

const adjustOpacity = (color: ColorValue, alpha: number) =>
	tinycolour(color as string)
		.setAlpha(alpha)
		.toString();

const lighten = (color: ColorValue, amount: number) =>
	tinycolour(color as string)
		.lighten(amount)
		.toString();

const darken = (color: ColorValue, amount: number) =>
	tinycolour(color as string)
		.darken(amount)
		.toString();

export { adjustOpacity, lighten, darken };
