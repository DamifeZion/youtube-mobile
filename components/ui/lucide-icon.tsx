// components/Icon.tsx
import * as Icons from "lucide-react-native";
import React from "react";
import { iconWithClassName } from "@/lib/iconWithClassName";
import { cn } from "@/lib/utils";

// Define valid icon names based on lucide-react-native icons
export type IconName = keyof typeof Icons;

export type LucideIconProps = Icons.LucideProps & {
	name: IconName;
	className?: string;
};

export const LucideIcon: React.FC<LucideIconProps> = ({
	name,
	className,
	size = 24,
	color,
	style,
	fill,
	...props
}) => {
	const LucideIcon = Icons[name] as Icons.LucideIcon;

	if (!LucideIcon) {
		console.error(`Icon "${name}" does not exist in lucide-react-native.`);
		return null;
	}

	iconWithClassName(LucideIcon);

	return (
		<LucideIcon
			className={cn("text-foreground", className)}
			size={size}
			color={color}
			style={style}
			{...props}
		/>
	);
};

export default LucideIcon;
