import { View, ViewProps } from "react-native";
import * as React from "react";
import { cn } from "@/lib/utils";

type SectionProps = ViewProps & {
	className?: string;
};

export const Section: React.FC<SectionProps> = ({ className, ...props }) => {
	return (
		<View
			className={cn("flex-1 px-containerHorizontal", className)}
			{...props}
		/>
	);
};
