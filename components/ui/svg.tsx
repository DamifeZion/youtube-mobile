import React from "react";
import { SvgXml } from "react-native-svg";
import { SVGItems } from "@/assets/icons/icons";

export default function MySVG({
	name,
	size = 24,
	color = "#fff",
	rotation = 0,
	height,
	stroke,
}: {
	name: string;
	size?: number;
	color?: string;
	fill?: string;
	rotation?: number;
	height?: number;
	stroke?: string;
}) {
	let xml = SVGItems[name]?.replace(/fill="[^"]*"/g, `fill="${color}"`);

	if (!xml) {
		console.warn(
			`Icon "${name}" not found, Please use name defined in the icon.ts`,
		);
		return null;
	}

	return (
		<SvgXml
			xml={xml}
			width={size}
			height={height ?? size}
			stroke={stroke}
			style={{ transform: [{ rotate: `${rotation}deg` }] }}
		/>
	);
}
