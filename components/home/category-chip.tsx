import * as React from "react";
import { Button } from "../ui/button";
import { Text } from "../ui/text";
import { cn } from "@/lib/utils";

type CategoryChipProps = {
	isActive?: boolean;
	children?: React.ReactNode;
	text?: string;
	className?: string;
	textClassName?: string;
	onPress?: () => void;
};

export const CategoryChip: React.FC<CategoryChipProps> = ({
	children,
	isActive,
	text,
	className,
	textClassName,
	onPress,
}) => {
	return (
		<Button
			onPress={onPress}
			variant={isActive ? "default" : "secondary"}
			className={cn(
				"native:rounded-xl native:h-fit native:p-1.5",
				className,
			)}
		>
			{children
				? children
				: text && (
						<Text className={cn("font-body-medium", textClassName)}>
							{text}
						</Text>
					)}
		</Button>
	);
};
